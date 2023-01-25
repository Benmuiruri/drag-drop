// Autobind decorator
function Autobind(_1: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    }
  };
  return adjDescriptor;
}

// ProjectInput class
class ProjectInput {
  formTemplateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;


  constructor() {
    // select the template element
    this.formTemplateElement = document.getElementById('project-input') as HTMLTemplateElement;
    this.hostElement = document.getElementById('app') as HTMLDivElement;

    // get form inside the template
    const importedFormNode = document.importNode(this.formTemplateElement.content, true);
    this.element = importedFormNode.firstElementChild as HTMLFormElement;
    this.element.id = 'user-input';

    // Access the form inputs
    this.titleInputElement = this.element.querySelector('#title') as HTMLInputElement;
    this.descriptionInputElement = this.element.querySelector('#description') as HTMLInputElement;
    this.peopleInputElement = this.element.querySelector('#people') as HTMLInputElement;

    // attach the form to the DOM
    this.configureForm();
    this.attachForm();

  }

  private attachForm() {
    this.hostElement.insertAdjacentElement('afterbegin', this.element);
  }

  @Autobind
  private submitHandler(event: Event) {
    event.preventDefault();
    console.log(this.titleInputElement.value);
  }

  private configureForm() {
    this.element.addEventListener('submit', this.submitHandler);
  }
}

const projectInput = new ProjectInput();