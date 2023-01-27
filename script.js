const atheism = document.querySelector('#atheism');
const atheismDesc = document.querySelector('#atheism-desc');
const logic = document.querySelector('#logic');
const logicDesc = document.querySelector('#logic-desc');
const happiness = document.querySelector('#happiness');
const happinessDesc = document.querySelector('#happiness-desc');
const theism = document.querySelector('#theism');
const theismDesc = document.querySelector('#theism-desc');
const conbuddha = document.querySelector('#conbuddha');
const conbuddhaDesc = document.querySelector('#conbuddha-desc');
const retro = document.querySelector('#retro');
const retroDesc = document.querySelector('#retro-desc');

//atheism

$(atheism).hover(function(){
    $(this).css('background-color', 'rgb(74, 111, 130)');
    }, function(){
    $(this).css('background-color', 'rgb(45, 69, 81)');
  });

atheism.addEventListener('mouseover', function() {
    atheismDesc.textContent = '//A description of Buddhism';
    atheismDesc.classList.add('description');
});

atheism.addEventListener('mouseout', function() {
    atheismDesc.textContent = '';
});

//logic

$(logic).hover(function(){
    $(this).css('background-color', 'rgb(74, 111, 130)');
    }, function(){
    $(this).css('background-color', 'rgb(45, 69, 81)');
  });

logic.addEventListener('mouseover', function() {
    logicDesc.textContent = '//A description of Buddhism';
    logicDesc.classList.add('description');
});

logic.addEventListener('mouseout', function() {
    logicDesc.textContent = '';
});

//happiness

$(happiness).hover(function(){
    $(this).css('background-color', 'rgb(74, 111, 130)');
    }, function(){
    $(this).css('background-color', 'rgb(45, 69, 81)');
  });

happiness.addEventListener('mouseover', function() {
    happinessDesc.textContent = '//A description of Buddhism';
    happinessDesc.classList.add('description');
});

happiness.addEventListener('mouseout', function() {
    happinessDesc.textContent = '';
});

//theism

$(theism).hover(function(){
    $(this).css('background-color', 'rgb(74, 111, 130)');
    }, function(){
    $(this).css('background-color', 'rgb(45, 69, 81)');
  });

theism.addEventListener('mouseover', function() {
    theismDesc.textContent = '//A description of Buddhism';
    theismDesc.classList.add('description');
});

theism.addEventListener('mouseout', function() {
    theismDesc.textContent = '';
});

//conbuddha

$(conbuddha).hover(function(){
    $(this).css('background-color', 'rgb(74, 111, 130)');
    }, function(){
    $(this).css('background-color', 'rgb(45, 69, 81)');
  });

conbuddha.addEventListener('mouseover', function() {
    conbuddhaDesc.textContent = '//A description of Buddhism';
    conbuddhaDesc.classList.add('description');
});

conbuddha.addEventListener('mouseout', function() {
    conbuddhaDesc.textContent = '';
});

//retro

$(retro).hover(function(){
    $(this).css('background-color', 'rgb(74, 111, 130)');
    }, function(){
    $(this).css('background-color', 'rgb(45, 69, 81)');
  });

retro.addEventListener('mouseover', function() {
    retroDesc.textContent = '//A description of Buddhism';
    retroDesc.classList.add('description');
});

retro.addEventListener('mouseout', function() {
    retroDesc.textContent = '';
});
