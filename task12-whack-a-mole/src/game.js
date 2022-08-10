const game = new Game();
game.initialize();

function Game() {
    const playerNameBoard = document.querySelector('.name-of-player');
    const scoreBoard = document.querySelector('.score');
    const failedAttempsBoard = document.querySelector('.failed');
    const levelBoard = document.querySelector('.current-level');
    const timeBoard = document.querySelector('.timer');

    const holes = document.querySelectorAll('.hole');
    const moles = document.querySelectorAll('.mole');
    const successfullWhack = document.getElementById('successfullWhack');
    const failedWhack = document.getElementById('failedWhack');
    let tableBody = document.getElementById('ranking-performance');

    const minPeepTime = 200;
    let maxPeepTime = 1000;
    let gameDuration = 15000;

    let lastHole;
    let timeUp = false;
    let score = 0;
    let failedAttemps = 0;
    let isGameActive = false;
    let currentLevel = 1;

    let time = 15;
    let timer;

    let gameDurationId;

    let performance = [];

    this.initialize = () => {
        moles.forEach(mole => mole.addEventListener('click', this.bonk));
        holes.forEach(hole => hole.addEventListener('click', this.failure));

        this.displayRankingPerformanceTable();
    }

    this.randomTime = (min, max) => {
        return Math.round(Math.random() * (max - min) + min);
    }

    this.randomHole = holes => {
        const idx = Math.floor(Math.random() * holes.length);
        const hole = holes[idx];
        if (hole === lastHole) return this.randomHole(holes);
        lastHole = hole;
        return hole;
    }

    this.peep = () => {
        if (this.playerUnblockedNextLevel()) {
            this.stopCurrentLevel();
            this.showNextLevelButton();
            this.quitTimeout();
            this.recordPerformance();
        }
        else {
            const time = this.randomTime(minPeepTime, maxPeepTime);
            const hole = this.randomHole(holes);
            hole.classList.add('up');
            setTimeout(() => {
                hole.classList.remove('up');
                if (!timeUp) this.peep();
            }, time);
        }
    }

    this.startGame = () => {
        this.startGameSetUp();
        this.play();
    }

    this.play = () => {
        this.peep();
        gameDurationId = setTimeout(() => {
            this.handleGameFinish();
        }, gameDuration)    
    }

    this.bonk = e => {
        if (!e.isTrusted) return;
        score++;
        e.target.classList.remove('up');
        scoreBoard.textContent = score;
        successfullWhack.play();
    }

    this.failure = e => {
        if (!e.isTrusted) return;
        if(isGameActive) {
            failedAttemps ++;
            failedAttempsBoard.textContent = failedAttemps;
            failedWhack.play();
        }
    }

    this.startGameSetUp = () => {
        this.resetMaxPeepTime();
        this.updateFlagsToStartPlaying();
        this.savePlayerNameSessionStorage();
        this.setUpGameBoards(); 
        this.clearInputField();
        this.disablePossibleClicks();
        this.hideNextLevelButton();
        this.resetBackgroundColor();
        this.startTimer();
        this.clearPerformance();
    }

    this.finishGame = () => {
        this.updateFlagsToStopPlaying();
        this.removePlayerNameSessionStorage();
        this.resetGameBoards();
        this.enablePossibleClicks();
    }

    this.resetGameBoards = () => {
        this.resetPlayerNameBoard();
        this.resetScoreBoard();
        this.resetFailedAttempsBoard();
        this.resetLevelBoard();
    }

    this.setUpGameBoards = () => {
        this.setUpPlayerNameBoard();
        this.resetScoreBoard();
        this.resetFailedAttempsBoard();
        this.resetLevelBoard(); 
        this.resetTimerBoard();
    }

    this.nextLevel = () => {
        this.nextLevelSetup();
        this.play();
    }

    this.nextLevelSetup = () => {
        this.hideNextLevelButton();
        this.updateFlagsToStartPlaying();
        this.increaseGameSpeed();
        this.increaseLevelBoard();
        this.resetScoreBoard();
        this.resetFailedAttempsBoard();
        this.changeGameBackground();
        this.resetTimerBoard();
        this.startTimer(); 
    }

    this.savePlayerNameSessionStorage = () => {
        sessionStorage.setItem('playerName', this.getPlayerName());
    }

    this.removePlayerNameSessionStorage = () => {
        sessionStorage.removeItem('playerName');    
    }

    this.startTimer = () => {
        timer = setInterval(runTimer, 1000);
    }

    this.stopTimer = () => {
        clearInterval(timer);
    }

    const runTimer = () => {
        if (time === 0) {
            this.stopTimer();
        }

        else {
            if (this.playerUnblockedNextLevel()) {
                this.stopTimer();
            }
            else {
                time -= 1;
                timeBoard.textContent = time;
            }
        }
    }
    
    this.clearInputField = () => {
        const playerNameInput = document.querySelector('.player-name-input');
        playerNameInput.value = '';
    }

    this.setUpPlayerNameBoard = () => { 
        playerNameBoard.textContent = this.getPlayerName();
    }

    this.resetPlayerNameBoard = () => { 
        const playerNameInput = '';
        playerNameBoard.textContent = playerNameInput;
    }

    this.resetScoreBoard = () => {
        score = 0;
        scoreBoard.textContent = score;
    }

    this.resetFailedAttempsBoard = () => {
        failedAttemps = 0;
        failedAttempsBoard.textContent = failedAttemps;
    }

    this.resetLevelBoard = () => {
        currentLevel = 1;
        levelBoard.textContent = currentLevel;
    }

    this.updateFlagsToStartPlaying = () => {      
        timeUp = false;
        isGameActive = true;
    }

    this.updateFlagsToStopPlaying = () => {      
        timeUp = true;
        isGameActive = false;
    }

    this.playerScoreGreaterThanFive = () => score > 5;

    this.increaseGameSpeed = () => maxPeepTime -= 300;

    this.increaseLevelBoard = () => {
        currentLevel++;
        levelBoard.textContent = currentLevel;
    }

    this.resetTimerBoard = () => {
        time = 15;
        timeBoard.textContent = time;
    }

    this.getPlayerName = () => {
        let playerName = document.querySelector('.player-name-input').value;
        if(!playerName) {
            playerName = 'Anonymous';
        }
        return playerName;    
    }

    this.disablePossibleClicks = () => {

        const clicksDisabler = selector => {
            document.querySelector(selector).style.cursor = 'not-allowed';
            document.querySelector(selector).style.backgroundColor = 'lightgray';
        }
        clicksDisabler('.start-game-button');
    }

    this.enablePossibleClicks = () => {
        const clicksEnabler = selector => {
            document.querySelector(selector).style.cursor = 'pointer';
            document.querySelector(selector).style.backgroundColor = '#ffc600';
        }
        clicksEnabler('.start-game-button');
    }

    this.stopCurrentLevel = () => {
        this.updateFlagsToStopPlaying();
    }

    this.showNextLevelButton = () => {
        document.querySelector('.next-level').style.display = 'block';
    }

    this.hideNextLevelButton = () => {
        document.querySelector('.next-level').style.display = 'none';
    }
    
    this.playerUnblockedNextLevel = () => this.playerScoreGreaterThanFive() && currentLevel === 1;

    this.resetBackgroundColor = () => {
        document.body.style.backgroundColor = "#ffc600";
    }

    this.changeGameBackground = () => {
        document.body.style.backgroundColor = "#eea209";
    }

    this.quitTimeout = () => {
        clearTimeout(gameDurationId);
    }

    this.recordPerformance = () => {
        performance.push({level: currentLevel, score});
    }

    this.clearPerformance = () => performance = [];

    this.handleGameFinish = () => {
        this.updateFlagsToStopPlaying();
        this.enablePossibleClicks();
        this.resetBackgroundColor();    
        this.recordPerformance();
        this.savePerformanceHistorical();
        this.displayRankingPerformanceTable();
    }

    this.savePerformanceHistorical = () => {
        const newPerformance = {
            playerName: sessionStorage.getItem('playerName'),
            performance
        };
        const performanceHistorical = JSON.parse(sessionStorage.getItem('performanceHistorical'));

        if(!performanceHistorical){
            sessionStorage.setItem('performanceHistorical', JSON.stringify([newPerformance]));
        } else {
            sessionStorage.removeItem('performanceHistorical');
            performanceHistorical.push(newPerformance);
            sessionStorage.setItem('performanceHistorical', JSON.stringify(performanceHistorical));
        }
    }

    this.displayRankingPerformanceTable = () => {
        this.resetRankingTable();
        const performanceHistorical = this.getPerformanceHistorical();
        if(!performanceHistorical) return;

        const performanceHistoricalWithTotalScored = this.getPerformanceHistoricalWithTotalScored(performanceHistorical);
        let orderedRanking = this.getOrderedRanking(performanceHistoricalWithTotalScored);
        if(orderedRanking.length > 5){
            orderedRanking = this.getFiveElementsInRanking(orderedRanking);
        } 

        for(rank of orderedRanking) {
            let row = tableBody.insertRow();
            let name = row.insertCell(0);
            name.innerHTML = rank.playerName;
            let scoreLevel1 = row.insertCell(1);
            scoreLevel1.innerHTML = rank.performance[0].score;
            let scoreLevel2 = row.insertCell(2);
            scoreLevel2.innerHTML = rank.performance[1] ? rank.performance[1].score : 0;
        }
    }

    this.getPerformanceHistorical = () => {
        return JSON.parse(sessionStorage.getItem('performanceHistorical'));
    }

    this.getOrderedRanking = performanceHistorical => {
        return performanceHistorical.sort((a, b) => b.totalScored - a.totalScored);
    } 

    this.getPerformanceHistoricalWithTotalScored = performanceHistorical => {
        let result = [];
        for(element of performanceHistorical){
            element.totalScored = this.getTotalScored(element.performance);
            result.push(element);
        }
        return result;
    }

    this.getTotalScored = performance => {
        let result = 0;
        for(let iterator of performance){
            result += iterator.score;
        }
        return result;
    }

    this.getFiveElementsInRanking = ranking => { 
        return ranking.slice(0, 5);
    }

    this.resetMaxPeepTime = () => {
        maxPeepTime = 1000;
    }

    this.resetGame = () => { 
        this.resetGameBoards();
        this.resetTimerBoard();
        this.clearSessionStorage();
        this.resetRankingTable();
        this.resetBackgroundColor();
        this.updateFlagsToStopPlaying();
        this.enablePossibleClicks();
        this.stopTimer();
    }

    this.clearSessionStorage = () => {
        sessionStorage.clear();
    }

    this.resetRankingTable = () => {
        tableBody.innerHTML = '';
    }
}

