import gql from 'graphql-tag'

const state = () => ({
  listBook: [],
  listHomeBook: [],
  listAuthor: [],
  bookDetail: {},
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
    state.setBookDetail = param
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
          book {
            book_id
            title
            image
            author
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
  async fetchBookByTitle(store, title) {
    const response = await this.app.apolloProvider.defaultClient.query({
      query: gql`
        query MyQuery($title: String!) {
          book(where: { title: { _eq: $title } }) {
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
      variables: { title },
    })
    store.commit('setBookDetail', response.data.book)
  },
}

export default { state, mutations, actions }
