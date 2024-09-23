import { Extension } from '@pb/extensions';


export default class ProjectExport extends Extension {

  public activate() {
    this.commands.addExporter('project-export', ({ project }) => {
      const name = project.properties.find((property: any) => property.propertyType === 'Name').value;
      this.commands.downloadFile(name, 'json', JSON.stringify(project));
    })
  }

  public deactivate() { }
};
