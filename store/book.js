import gql from 'graphql-tag'

const state = () => ({
  listBook: [],
  listHomeBook: [],
  listAuthor: [],
  bookDetail: {},
  getByCategory: [],
  listBySearch: [],
})

const mutations = {
  setListBook(state, param) {
    state.listBook = param
  },
  setListHomeBook(state, param) {
    state.listHomeBook = param
  },
  setListAuthor(state, param) {
    state.listAuthor = param
  },
  setBookDetail(state, param) {
    state.bookDetail = param
  },
  setGetByCategory(state, param) {
    state.getByCategory = param
  },
  setListBySearch(state, param) {
    state.listBySearch = param
  },
}

const actions = {
  async fetchBook(store) {
    const response = await this.app.apolloProvider.defaultClient.query({
      query: gql`
        query getBook {
          book(limit: 6, order_by: { book_id: desc }) {
            book_id
            title
            image
            author
            slug
          }
        }
      `,
    })
    store.commit('setListBook', response.data.book)
  },
  async fetchHomeBook(store) {
    const response = await this.app.apolloProvider.defaultClient.query({
      query: gql`
        query getBook {
          book(order_by: { book_id: desc }) {
            book_id
            title
            image
            author
            slug
          }
        }
      `,
    })
    store.commit('setListHomeBook', response.data.book)
  },
  async fetchAuthor(store) {
    const response = await this.app.apolloProvider.defaultClient.query({
      query: gql`
        query getAuthor {
          book {
            author
          }
        }
      `,
    })
    store.commit('setListAuthor', response.data.book)
  },
  async fetchBookByTitle(store, slug) {
    const response = await this.app.apolloProvider.defaultClient.query({
      query: gql`
        query MyQuery($slug: String!) {
          book(where: { slug: { _eq: $slug } }) {
            author
            image
            slug
            title
            detail {
              category
              country
              description
              language
              page_count
              publisher
              release_date
            }
          }
        }
      `,
      variables: { slug },
    })
    store.commit('setBookDetail', response.data.book)
  },
  async fetchBookByCategory(store, category) {
    const response = await this.app.apolloProvider.defaultClient.query({
      query: gql`
        query getComic($category: String) {
          book(where: { detail: { category: { _eq: $category } } }) {
            author
            image
            slug
            title
          }
        }
      `,
      variables: { category },
    })
    store.commit('setGetByCategory', response.data.book)
  },

  async getListFromSearch(store, keyword) {
    const response = await this.app.apolloProvider.defaultClient.query({
      query: gql`
        query findBook($keyword: String) {
          book(where: { slug: { _like: $keyword } }) {
            book_id
            image
            slug
            title
          }
        }
      `,
      variables: { keyword: '%' + keyword + '%' },
    })
    store.commit('setListBySearch', response.data.book)
  },
}

export default { state, mutations, actions }
