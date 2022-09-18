class RockPaperScissors {
  constructor(username) {
    this.username = username;
    this.score = {
      user: 0,
      cpu:0 
    },
    this.gameHistoryLog = [];
  }

  /**
   * RETURN: one of the following values (`rock`, `paper`, `scissors`)
   * using Math.random() method, you should be able to get one of the following values
   */
  generateCPUResponse(){
    const acceptedValues = [ `rock`, `paper`, `scissors` ];

    return acceptedValues[Math.floor(Math.random() * 3)];
  }
  /**
   * returns one of the following values: `win`, `lose`, `tie`
   * tie:
   *     the user selection the same as the CPU
   * win: 
   *    (user is `rock` and cpu is `scissors
   *     OR
   *    (user is `paper` and cpu is `rock`) 
   *     OR 
   *    (user is `scissors` and cpu is `paper`)
   * `lose`:
   *    the opposite case :)
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   * @param {string} cpuSelection computer selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  determineWinner(userSelection, cpuSelection){
    if(userSelection == cpuSelection) return `tie`;
    if((userSelection == `rock` && cpuSelection == `scissors`) || 
       (userSelection == `paper` && cpuSelection == `rock`) || 
       (userSelection == `scissors` && cpuSelection == `paper`)) {
      return `win`;
    } else {
      return `lose`;
    }
    
  }

  /**
   * 
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  play(userSelection){
    debugger;
    let cpuResponse = this.generateCPUResponse();
    let result = this.determineWinner(userSelection, cpuResponse);
    let log = ``;
    if(result == `win`) {
      this.score.user ++;
      log = `<div style="color: green">` + this.username.value + ` selected ` + userSelection + `, CPU selected ` + cpuResponse + `: ` + this.username.value + ` wins!</div>`;
    } else if(result == `lose`) {
      this.score.cpu ++;
      log = `<div style="color: red">` + this.username.value + ` selected ` + userSelection + `, CPU selected ` + cpuResponse + `: CPU wins!</div>`;
    } else {
      log = `<div>` + this.username.value + ` selected ` + userSelection + `, CPU selected ` + cpuResponse + `: Tie!</div>`;
    }
    this.gameHistoryLog.push(log);
  }

}