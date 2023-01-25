class ProjectInput {
  formTemplateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;

  constructor() {
    // select the template element
    this.formTemplateElement = document.getElementById('project-input') as HTMLTemplateElement;
    this.hostElement = document.getElementById('app') as HTMLDivElement;

    // get form inside the template
    const importedFormNode = document.importNode(this.formTemplateElement.content, true);
    this.element = importedFormNode.firstElementChild as HTMLFormElement;

    // attach the form to the DOM
    this.attach();

  }

  private attach() {
    this.hostElement.insertAdjacentElement('afterbegin', this.element);
  }
}

const projectInput = new ProjectInput();