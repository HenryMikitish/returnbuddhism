const topicA = document.querySelector('#topic-a');
const atheism = document.querySelector('#atheism');
const atheismDesc = document.querySelector('#atheism-desc');

const topicB = document.querySelector('#topic-b');
const logic = document.querySelector('#logic');
const logicDesc = document.querySelector('#logic-desc');

const topicC = document.querySelector('#topic-c');
const happiness = document.querySelector('#happiness');
const happinessDesc = document.querySelector('#happiness-desc');

const topicD = document.querySelector('#topic-d');
const theism = document.querySelector('#theism');
const theismDesc = document.querySelector('#theism-desc');

const topicE = document.querySelector('#topic-e');
const conbuddha = document.querySelector('#conbuddha');
const conbuddhaDesc = document.querySelector('#conbuddha-desc');

const topicF = document.querySelector('#topic-f');
const retro = document.querySelector('#retro');
const retroDesc = document.querySelector('#retro-desc');

//atheism

atheism.addEventListener('mouseover', function() {
    topicA.classList.add('button');
    atheismDesc.textContent = '//A description of Buddhism';
    atheismDesc.classList.add('description');

    $("#topic-a").click(function() {
        window.location = $(this).find("a").attr("href"); 
        return false;
      });
});

topicA.addEventListener('mouseleave', function() {
    atheismDesc.textContent = '';
    topicA.classList.remove('button');
});

//logic

logic.addEventListener('mouseover', function() {
    topicB.classList.add('button');
    logicDesc.textContent = '//A description of Buddhism';
    logicDesc.classList.add('description');

    $("#topic-b").click(function() {
        window.location = $(this).find("a").attr("href"); 
        return false;
      });
});

topicB.addEventListener('mouseleave', function() {
    logicDesc.textContent = '';
    topicB.classList.remove('button');
});

//happiness

happiness.addEventListener('mouseover', function() {
    topicC.classList.add('button');
    happinessDesc.textContent = '//A description of Buddhism';
    happinessDesc.classList.add('description');

    $("#topic-c").click(function() {
        window.location = $(this).find("a").attr("href"); 
        return false;
      });
});

topicC.addEventListener('mouseleave', function() {
    happinessDesc.textContent = '';
    topicC.classList.remove('button');
});

//theism

theism.addEventListener('mouseover', function() {
    topicD.classList.add('button');
    theismDesc.textContent = '//A description of Buddhism';
    theismDesc.classList.add('description');

    $("#topic-d").click(function() {
        window.location = $(this).find("a").attr("href"); 
        return false;
      });
});

topicD.addEventListener('mouseleave', function() {
    theismDesc.textContent = '';
    topicD.classList.remove('button');
});

//conbuddha

conbuddha.addEventListener('mouseover', function() {
    topicE.classList.add('button');
    conbuddhaDesc.textContent = '//A description of Buddhism';
    conbuddhaDesc.classList.add('description');

    $("#topic-e").click(function() {
        window.location = $(this).find("a").attr("href"); 
        return false;
      });
});

topicE.addEventListener('mouseleave', function() {
    conbuddhaDesc.textContent = '';
    topicE.classList.remove('button');
});

//retro

retro.addEventListener('mouseover', function() {
    topicF.classList.add('button');
    retroDesc.textContent = '//A description of Buddhism';
    retroDesc.classList.add('description');

    $("#topic-f").click(function() {
        window.location = $(this).find("a").attr("href"); 
        return false;
      });
});

topicF.addEventListener('mouseleave', function() {
    retroDesc.textContent = '';
    topicF.classList.remove('button');
});