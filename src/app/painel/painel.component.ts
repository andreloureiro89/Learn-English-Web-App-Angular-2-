import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frase-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})

export class PainelComponent implements OnInit, OnDestroy {

  public frases: Frase[] = FRASES;
  public instrucao = 'Traduza a frase:';
  public resposta = '';
  public rodada = 0;
  public rodadaFrase: Frase;
  public progresso = 0;
  public tentativas = 3;

  @Output()
  public encerrarJogo: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.actualizaRodadas();
  }

  ngOnDestroy() {

  }

  ngOnInit(): void {
  }

  public actualizaResposta(resposta: Event): void {
    this.resposta = (resposta.target as HTMLInputElement).value;
  }


  public verificarResposta(): void{

    this.progresso = this.progresso + (100 / this.frases.length);

    if (this.rodadaFrase.frasePt === this.resposta){
      this.rodada++;
      this.actualizaRodadas();

      if (this.rodada === 4){
        this.encerrarJogo.emit('Vitoria');
      }

    } else {

      this.tentativas--;

      if (this.tentativas === -1){
        this.encerrarJogo.emit('derrota');
      }

    }

    this.resposta = '';

  }

  public actualizaRodadas(): void {
    this.rodadaFrase = this.frases[this.rodada];
  }

}
