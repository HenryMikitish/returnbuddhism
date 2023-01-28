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