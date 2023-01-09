
    let playerScore = 0
    let computerScore = 0

    const rockButton = document.querySelector(".rock")
    const paperButton = document.querySelector(".paper")
    const scissorsButton = document.querySelector(".scissors")
    const outcomeDiv = document.querySelector(".outcome")
    const playerScoreSpan = document.querySelector(".player-score")
    const computerScoreSpan = document.querySelector(".computer-score")
    

    const computerPlay = () => {
        const options = ["rock", "paper", "scissors"]
        const randomNum = Math.floor(Math.random() * options.length)
        const choice = options[randomNum]
        return choice;
    }
  
    const playRound = (playerSelection, computerSelection) => {
        if (playerSelection === computerSelection) {
            const p = document.createElement("p")
            p.innerText = "You tied"
            outcomeDiv.appendChild(p)
        } else if (playerSelection === "rock" && computerSelection === "scissors") {
            playerScore++
            const p = document.createElement("p")
            p.innerText = "You won!"
            outcomeDiv.appendChild(p)
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            playerScore++
            const p = document.createElement("p")
            p.innerText = "You won!"
            outcomeDiv.appendChild(p)
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            playerScore++
            const p = document.createElement("p")
            p.innerText = "You won!"
            outcomeDiv.appendChild(p)
        } else if (playerSelection === "rock" && computerSelection === "paper") {
            computerScore++
            const p = document.createElement("p")
            p.innerText = "You lost!"
            outcomeDiv.appendChild(p)
        } else if (playerSelection === "paper" && computerSelection === "scissors") {
            computerScore++
            const p = document.createElement("p")
            p.innerText = "You lost!"
            outcomeDiv.appendChild(p)
        } else if (playerSelection === "scissors" && computerSelection === "rock") {
            computerScore++
            const p = document.createElement("p")
            p.innerText = "You lost!"
            outcomeDiv.appendChild(p)
        }
    }


    const checkForWinner = (playerScore, computerScore) => {
        if (playerScore === 5) {
            const h2 = document.createElement("h2")
            h2.classList.add("player-won")
            h2.innerText = "You beat the computer!!"
            outcomeDiv.append(h2)
        } else if (computerScore === 5) {
            const h2 = document.createElement("h2")
            h2.classList.add("computer-won")
            h2.innerText = "You lost to the computer!!"
            outcomeDiv.append(h2)
        }
    }

    const updateScore = (playerScore, computerScore) => {
        playerScoreSpan.innerText = `Player Score: ${playerScore}`
        computerScoreSpan.innerText = `Computer Score: ${computerScore}`

    }

    rockButton.addEventListener("click", () => {
      const computerSelection = computerPlay()  
      const playerSelection = "rock"
      playRound(playerSelection, computerSelection)
      updateScore(playerScore, computerScore)
      checkForWinner(playerScore, computerScore)
    })

    paperButton.addEventListener("click", () => {
        const computerSelection = computerPlay()  
        const playerSelection = "paper"
        playRound(playerSelection, computerSelection)
        updateScore(playerScore, computerScore)
        checkForWinner(playerScore, computerScore)
  
    })

      scissorsButton.addEventListener("click", () => {
        const computerSelection = computerPlay()  
        const playerSelection = "scissors"
        playRound(playerSelection, computerSelection)
        updateScore(playerScore, computerScore)
        checkForWinner(playerScore, computerScore)
  
    })
    
    