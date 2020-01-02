class GitHub {
  constructor(){
    this.client_id = "8f53d42b13df8537d155";
    this.client_secret = "9ca695a639707ef16b570e32f41db66698d33fb0";
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}