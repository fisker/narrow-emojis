import fs from 'node:fs/promises'
import writePrettierFile from 'write-prettier-file'

async function downloadText(url, cacheFile) {
  let stat

  try {
    stat = await fs.stat(cacheFile)
  } catch {
    // No op
  }

  if (stat) {
    if (Date.now() - stat.mtimeMs < /* 10 hours */ 10 * 60 * 60 * 1000) {
      return await fs.readFile(cacheFile, 'utf8')
    }

    await fs.rm(cacheFile)
  }

  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(`Fetch '${url}' failed.`)
  }

  const text = await response.text()

  await writeTextFile(cacheFile, text)
  return text
}

async function writeTextFile(file, content) {
  const directory = new URL('./', file)
  await fs.mkdir(directory, {recursive: true})
  return fs.writeFile(file, content)
}

async function updateFile(file, process) {
  const content = await fs.readFile(file, 'utf8')
  await writePrettierFile(file, await process(content))
}

export {downloadText, updateFile, writeTextFile}
