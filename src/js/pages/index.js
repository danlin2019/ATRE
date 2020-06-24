// @prepros-prepend ../section/news.js
// @prepros-prepend ../section/rule.js
// @prepros-prepend ../section/intor.js
// @prepros-prepend ../section/Index.js
// @prepros-prepend ../section/Topic1.js
// @prepros-prepend ../section/Topic2.js
// @prepros-prepend ../section/Topic3.js
// @prepros-prepend ../section/Topic4.js
// @prepros-prepend ../section/Topic5.js
// @prepros-prepend ../section/Topic6.js
// @prepros-prepend ../section/Resule.js
// @prepros-prepend ../section/development.js

let currSection
const sectionPool = []

function goto(sectionName) {
  // console.log(`goto ${sectionName}`)
  // 
  if (currSection) {
    currSection.hide()
  }
  let section
  let index

  if (sectionName === 'Index') {

    index = checkSection(Index)
    // console.log(Index)
    if (index > -1) {
      section = sectionPool[index]
    } else {
      section = new Index()
      sectionPool.push(section)
    }

  } else if (sectionName === 'Topic1') {

    index = checkSection(Topic1)
    console.log(Topic1)
    if (index > -1) {
      section = sectionPool[index]

    } else {
      section = new Topic1()
      sectionPool.push(section)

    }

  } else if (sectionName === 'Topic2') {

    index = checkSection(Topic2)
    console.log(Topic2)
    if (index > -1) {
      section = sectionPool[index]
    } else {
      section = new Topic2()
      sectionPool.push(section)
    }


  } else if (sectionName === 'Topic3') {
    index = checkSection(Topic3)
    console.log(Topic3)
    if (index > -1) {
      section = sectionPool[index]
    } else {
      section = new Topic3()
      sectionPool.push(section)
    }

  } else if (sectionName === 'Topic4') {

    index = checkSection(Topic4)
    console.log(Topic4)
    if (index > -1) {
      section = sectionPool[index]
    } else {
      section = new Topic4()
      sectionPool.push(section)
    }

  } else if (sectionName === 'Topic5') {

    index = checkSection(Topic5)
    console.log(Topic5)
    if (index > -1) {
      section = sectionPool[index]
    } else {
      section = new Topic5()
      sectionPool.push(section)
    }
  } else if (sectionName === 'Topic6') {

    index = checkSection(Topic6)
    console.log(Topic6)
    if (index > -1) {
      section = sectionPool[index]
    } else {
      section = new Topic6()
      sectionPool.push(section)
    }
  } else if (sectionName === 'Resule') {

    index = checkSection(Resule)
    console.log(Resule)
    if (index > -1) {
      section = sectionPool[index]
    } else {
      section = new Resule()
      sectionPool.push(section)
    }

    $('header').addClass('active')
  }

  console.log('section :')
  console.log(section)
  section.show()
  currSection = section
}

function checkSection(_class) {

  for (let i = 0; i < sectionPool.length; i++) {
    console.log(sectionPool[i] instanceof _class)
    if (sectionPool[i] instanceof _class) {
      return i
    }
  }
  return -1
}


if (location.hostname === 'localhost') {
  goto('Index')
} else {
  goto('Resule')
}


$('.btn-in').on('click', () => {
  goto('Index')
})