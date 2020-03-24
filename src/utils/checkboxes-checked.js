function checkboxesChecked (checkboxes) {
  return Object.values(checkboxes).filter(c => !!c)
}

export default checkboxesChecked
