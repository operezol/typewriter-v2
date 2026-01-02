export interface Quote {
  quote: string
  author: string
}

export async function fetchRandomQuote(): Promise<Quote> {
  try {
    const response = await fetch(
      'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
    )
    const data = await response.json()
    const randomIndex = Math.floor(Math.random() * data.quotes.length)
    return data.quotes[randomIndex]
  } catch (error) {
    console.error('Error fetching quote:', error)
    return {
      quote: 'The only way to do great work is to love what you do.',
      author: 'Steve Jobs'
    }
  }
}
