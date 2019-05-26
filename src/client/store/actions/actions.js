

export const setSearchType = (searchType) => ({
  type: 'SET_SEARCH_TYPE',
  searchType
})

export const setSearchString = (searchString) => ({
  type: 'SET_SEARCH_STRING',
  searchString
})

export const searchTypes = {
  GENERAL: 's',
  TITLE: 't'
}
