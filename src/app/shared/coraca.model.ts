export class Coracao {
  constructor(public cheio: boolean, public urlCoracaCheio = '/assets/coracao_cheio.png', public urlCoracaoVazio = '/assets/coracao_vazio.png') {}

  public exibeCoracao(): string {
    if (this.cheio){
      return this.urlCoracaCheio;
    } else {
      return this.urlCoracaoVazio;
    }
  }

}
