const topics = document.querySelectorAll('.topic');
const links = document.querySelectorAll('.link');

function unhide(e) {
    const hiddenTopic = e.target;
    const topicToUnhide = hiddenTopic.nextElementSibling;
    topicToUnhide.classList.remove('hidden');
    topicToUnhide.classList.add('description');

    const boldTopic = hiddenTopic.parentElement;
    boldTopic.classList.add('button');

    $(".link").click(function() {
        window.location = $(this).find("a").attr("href"); 
        return false;
      });
}

function hide(e) {
    const topicToHide = e.target;
    const textToHide = topicToHide.lastElementChild;
    textToHide.classList.add('hidden');
    topicToHide.classList.remove('button');

}

topics.forEach(topic => topic.addEventListener('mouseover', unhide));
links.forEach(link => link.addEventListener('mouseleave', hide));

//retro

const retroLink = document.querySelector('.retro-link');
const retroTopic = document.querySelector('.retro-topic');
const retroDesc = document.querySelector('.retro-desc');
const retroOne = document.querySelector('#retro-one');
const retroTwo = document.querySelector('#retro-two');


retroTopic.addEventListener('mouseover', function() {
    retroDesc.classList.remove('hidden');
    retroDesc.classList.add('description');
    retroLink.classList.add('button');
    retroOne.classList.add('color-retro-one');
    retroTwo.classList.add('color-retro-two');

    $(".retro-link").click(function() {
        window.location = $(this).find("a").attr("href"); 
        return false;
      });
});

retroLink.addEventListener('mouseleave', function() {
    retroDesc.classList.add('hidden');
    retroLink.classList.remove('button');
    retroOne.classList.remove('color-retro-one');
    retroTwo.classList.remove('color-retro-two');
});
