import { Extension } from '@pb/extensions';


export default class ProjectExport extends Extension {
  name = 'Download Project as JSON';
  description = 'This extension allows you to download a JSON-formatted version of your project. The downloaded file will contain a structured representation of your project, including all key details, configurations, and settings, making it easy to store, share, or process in other tools. Ideal for backups, versioning, or exporting data to integrate with other systems.';


  public activate() {
    this.commands.addExporter({
      key: '1',
      label: 'Export project',
      action: ({ project }) => {
        const name = project.properties.find((property: any) => property.propertyType === 'Name').value;
        this.commands.downloadFile(name, 'json', JSON.stringify(project));
      }
    })
  }

  public deactivate() {
    this.commands.removeExporter('1');
  }
};
