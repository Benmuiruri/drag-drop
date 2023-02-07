// Drag and Drop Interfaces

export interface Draggable {
  startDragHandler(event: DragEvent): void;
  endDragHandler(event: DragEvent): void;
}

export interface DragTarget {
  dragOverHandler(event: DragEvent): void;
  dropHandler(event: DragEvent): void;
  dragLeaveHandler(event: DragEvent): void;
}



