import { Component, OnInit } from '@angular/core';
import { ArquivosService } from 'src/app/services/arquivos.service';

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.css']
})
export class ConteudoComponent implements OnInit {

  ebooks!: string[];
  pdfUrl = '';

  constructor(
    private ebookService : ArquivosService
  ) {}

  ngOnInit(): void {
    this.getEbookList();
  }

  getEbookList(): void{
    this.ebookService.getEbooksList().subscribe(
      (response: any) => {
        this.ebooks = response.arquivos;
        console.log(response);
      },
      (error) => {
        console.error('Error fetching eboooks list: ', error);
      }
    );
  }

  getDownloadLink(ebook: string): string {
    // Substitua o caminho "../assets/ebooks" pelo caminho correto para o diretório que contém os PDFs
    return `../../../../arquives/ebooks/${encodeURIComponent(ebook)}`;
  }
}
