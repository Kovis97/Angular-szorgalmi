import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Badge } from '../../classes/badge';

@Component({
  selector: 'app-badge-card',
  templateUrl: './badge-card.component.html',
  styleUrls: ['./badge-card.component.scss']
})
export class BadgeCardComponent implements OnInit {
  @Input() badge: Badge;

  @Output() removeBtnClicked: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  emitRemoveBtnClick(event: Event) {
    event.stopPropagation();

    this.removeBtnClicked.emit();
  }

}
