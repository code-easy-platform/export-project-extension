import { Extension } from '@pb/extensions';


export default class ProjectExport extends Extension {
  public activate() {
    this.addExporter({
      key: '1',
      label: 'Export project',
      action: ({ project }) => {
        const name = project.properties.find((property: any) => property.propertyType === 'Name').value;
        this.downloadFile(name, 'json', JSON.stringify(project));
      }
    })
  }

  public deactivate() {
    this.removeExporter('1');
  }
};
