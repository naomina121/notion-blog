import Prism from 'prismjs'
import 'prism-themes/themes/prism-nord.min.css'

import React, { FC, useEffect } from 'react'
import parse, { domToReact } from 'html-react-parser'
import { BlockType, ContentsProps, RichTextType } from '@/types'

const Contents: FC<ContentsProps> = ({ blocks }) => {
  const BlockTypeArray: string[] = [
    'heading_2',
    'heading_3',
    'image',
    'paragraph',
    'code',
    'bulleted_list_item',
    'numbered_list_item',
    'quote',
  ]

  //特殊文字をエスケープ
  const entityify = (function () {
    const characte: any = {
      '<': '&lt;',
      '>': '&gt;',
      '&': '&amp;',
      '"': '&quot;',
      '\n': '<br>',
    }
    return function (t2: string): string {
      return t2.replace(/[<>&"]/g, function (c) {
        return characte[c]
      })
    }
  })()

  // rech_text以下の装飾のスタイリングの追加 typeがtext以外はスキップ。
  const RichTextStyling = (contents: RichTextType[] | undefined) => {
    const Styling: string[] = []
    const style = {
      bold: 'font-bold ',
      strikethrough: 's',
      underline: 'underline decoration-1',
    }
    if (contents === undefined) {
      return ' '
    }
    contents.map((content, i) => {
      const text = entityify(content.plain_text)
      const link = content.text?.link
      if (text === ' ') {
        return []
      }
      if (content.type === 'text') {
        if (content.href !== null) {
          if (content.annotations) {
            if (content.annotations.strikethrough) {
              Styling.push(
                `<a class='text-blue-600 hover:opacity-80' href="${
                  content.href
                }" target="target_blank" class="${content.annotations.bold ? style.bold : ''}${
                  content.annotations.underline ? style.underline : ''
                }" ><s>${text}</s></a>`,
              )
            } else {
              Styling.push(
                `<a class='text-blue-600 hover:opacity-80' href="${content.href}" target="target_blank">${text}</a>`,
              )
            }
          }
        } else {
          if (content.annotations) {
            if (content.annotations.strikethrough) {
              Styling.push(
                `<span class="${content.annotations.bold ? style.bold : ''}${
                  content.annotations.underline ? style.underline : ''
                }" ><s>${text}</s></span>`,
              )
            } else if (content.annotations.code) {
              Styling.push(`<code class="text-xs bg-gray-300 text-red-400">${text}</code>`)
            } else if (link) {
              Styling.push(`<a href="${link.url})${text}</a>`)
            } else if (content.annotations.bold || content.annotations.underline) {
              Styling.push(
                `<span class="${content.annotations.bold ? style.bold : ''}${
                  content.annotations.underline ? style.underline : ''
                }">${text}</span>`,
              )
            } else {
              Styling.push(`${text}`)
            }
          } else {
            Styling.push(`${text}`)
          }
        }

        return Styling
      }
    })
    const Join = Styling.join('')
    return Join
  }
  //ブロックタイプをHTMLに変換する
  const NotionBlockToTag = (block: BlockType) => {
    if (block.type == 'heading_2') {
      return `<h2 class='my-6 bg-sky-100 p-3 text-2xl text-gray-700' id="${RichTextStyling(
        block.heading_2?.rich_text,
      )}">${RichTextStyling(block.heading_2?.rich_text)}</h2>`
    }
    if (block.type === 'heading_3') {
      return `<h3 class='my-6 border-b-2 border-solid py-3 text-xl text-gray-600' id="${RichTextStyling(
        block.heading_3?.rich_text,
      )}">${RichTextStyling(block.heading_3?.rich_text)}</h3>`
    }
    if (block.type === 'paragraph') {
      return `<p class="my-6">${RichTextStyling(block.paragraph?.rich_text)}</p>`
    }
    if (block.type === 'bulleted_list_item') {
      return `<li class='mb-2 ml-4'>${RichTextStyling(block.bulleted_list_item?.rich_text)}</li>`
    }
    if (block.type === 'numbered_list_item') {
      return `<li class='mb-2 ml-7'>${RichTextStyling(block.numbered_list_item?.rich_text)}</li>`
    }

    if (block.type === 'image') {
      const src = block.image?.file ? block.image?.file?.url : block.image?.external?.url
      const alt = block.image?.caption ? block.image?.caption : ''
      return `<img class='my-6 inline-block' src="${src}" alt="${alt}" />`
    }
    if (block.type === 'quote') {
      return `<blockquote class='my-6'>${RichTextStyling(block.quote?.rich_text)}</blockquote>`
    }
    if (block.type === 'code') {
      const NotionCodeLanguage = {
        html: 'html',
        markup: 'markup',
        css: 'css',
        javascript: 'javascript',
        abap: 'git',
        arduino: 'json',
        elm: 'ts',
        powershell: 'powershell',
        plean_text: 'plean_text',
      }

      const NotionLanguage = (findLang: string, obj: any) => {
        const result = []
        if (obj[findLang]) {
          result.push(obj[findLang])
        } else {
          result.push('plean_text')
        }
        return result
      }

      const searchLang = block.code?.language ? block.code.language : 'plean_text'
      const lang = NotionLanguage(searchLang, NotionCodeLanguage)

      return `<pre class="line-numbers my-6"><code class="language-${
        lang[0]
      } text-xs" data-caption="${block.code?.caption[0]}">${RichTextStyling(
        block.code?.rich_text,
      )}</code></pre>`
    }
  }

  //最終的にblocksをHTMLに変換する関数
  const NotionBlocksToHtml = (blocks: BlockType[]) => {
    // 出力するHTMLをフィルターにかける。
    const BlocksFilter = blocks.filter((block: any) => {
      return BlockTypeArray.find((value) => value === block.type)
    })

    // HTMLを連結させて最終的に一つのHTMLとして出力させるための配列
    const HtmlArray: any[] = []
    // Ul要素を判別するための配列
    let UlArray: any[] = []
    // OL要素を判別するための配列
    let OlArray: any[] = []

    BlocksFilter.map((block: BlockType, index: number) => {
      const add = NotionBlockToTag(block)

      if (block.type === 'bulleted_list_item') {
        if (UlArray.length === 0) {
          UlArray.push('<ul class="list-disc my-6">')
          UlArray.push(add)
        } else {
          UlArray.push(add)
        }
      }

      if (block.type === 'numbered_list_item') {
        if (OlArray.length === 0) {
          OlArray.push('<ol class="list-decimal my-6">')
          OlArray.push(add)
        } else {
          OlArray.push(add)
        }
      }

      if (block.type !== 'numbered_list_item' && OlArray.length > 0) {
        OlArray.push('</ol>')
        const ol = ([...OlArray] = OlArray)
        const ol_string = ol.join('')
        HtmlArray.push(ol_string)
        OlArray = []
      } else if (block.type !== 'bulleted_list_item' && UlArray.length > 0) {
        UlArray.push('</ul>')
        const ul = ([...UlArray] = UlArray)
        const ul_string = ul.join('')
        HtmlArray.push(ul_string)
        UlArray = []
      } else if (index === BlocksFilter.length - 1) {
        //配列の一番最後でもリスト要素が残っていた場合の処理
        if (OlArray.length > 0) {
          OlArray.push('</ol>')
          const ol = ([...OlArray] = OlArray)
          const ol_string = ol.join('')
          HtmlArray.push(ol_string)
          OlArray = []
        } else if (UlArray.length > 0) {
          UlArray.push('</ul>')
          const ul = ([...UlArray] = UlArray)
          const ul_string = ul.join('')
          HtmlArray.push(ul_string)
          UlArray = []
        }
      } else if (block.type !== 'numbered_list_item' && block.type !== 'bulleted_list_item') {
        HtmlArray.push(add)
      }

      return HtmlArray
    })

    const html = HtmlArray.join(' ')
    return html
  }

  const html = parse(NotionBlocksToHtml(blocks))

  useEffect(() => {
    Prism.highlightAll()
  })

  return <section className='text-gray-800'>{html}</section>
}

export default Contents
