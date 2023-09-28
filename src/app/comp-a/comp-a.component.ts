import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css'],
  providers: [NgbModalConfig, NgbModal],
})

export class CompAComponent implements OnInit{
  img_list: string[];
  chosen_image: string;

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    config.centered = true;
    config.size = 'lg'
  }

  ngOnInit() {
    this.img_list = []
    this.chosen_image = ''

    for (let i = 1; i < 9; i++){
      this.img_list.push('../assets/images/' + String(i) + '.png')
    }
  }

  open(content: any, choice: string) {
		this.modalService.open(content);
    this.chosen_image = choice;
	}
}
