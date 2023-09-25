import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css']
})

export class CompAComponent implements OnInit{
  img_list: string[];
  chosen_image: string;

  constructor(private modalService: NgbModal) {}

  ngOnInit() {
    this.img_list = []
    this.chosen_image = ''

    for (let i = 1; i < 9; i++){
      this.img_list.push('../assets/images/' + String(i) + '.png')
    }
  }

  open(content: any, choice: string) {
		this.modalService.open(content, { size: 'xl' });
    this.chosen_image = choice;
	}
}
