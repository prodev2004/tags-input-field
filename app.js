
// SUBSCRIBE ==> https://www.youtube.com/albdev
// SUBSCRIBE ==> https://www.youtube.com/albdev

const input = document.querySelector('input')
const text_area = document.querySelector('.text-area')
const tags_container = document.querySelector('.tags')

text_area.addEventListener('click', () => {
    text_area.classList.add('focused')
    input.focus()
})

input.addEventListener('blur', () => {
    if (tags_container.innerText == '') {
        text_area.classList.remove('focused')      
    } else {
        text_area.classList.add('focused')
    }
})

input.addEventListener('keyup', (e) => {
    if (e.code == 'Space') {
        if (input.value !== ' ') {
            create_span(input.value)
        }
        input.value = ''
    }
})

function create_span (span_text) {
    const span = document.createElement('span')
    span.innerText = span_text

    tags_container.append(span)

    const tags = document.querySelectorAll('.tags span')
    remove_tag(tags)
}

function remove_tag (tags) {
    tags.forEach(tag => {
        tag.addEventListener('click', () => tag.remove())
    })
}

// SUBSCRIBE ==> https://www.youtube.com/albdev
// SUBSCRIBE ==> https://www.youtube.com/albdev