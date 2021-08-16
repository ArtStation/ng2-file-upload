import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FileDropDirective } from './file-drop.directive';
import { FileSelectDirective } from './file-select.directive';
export class FileUploadModule {
}
FileUploadModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [FileDropDirective, FileSelectDirective],
                exports: [FileDropDirective, FileSelectDirective]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS11cGxvYWQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2ZpbGUtdXBsb2FkL2ZpbGUtdXBsb2FkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQU85RCxNQUFNLE9BQU8sZ0JBQWdCOzs7WUFMNUIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFFLFlBQVksQ0FBRTtnQkFDekIsWUFBWSxFQUFFLENBQUUsaUJBQWlCLEVBQUUsbUJBQW1CLENBQUU7Z0JBQ3hELE9BQU8sRUFBRSxDQUFFLGlCQUFpQixFQUFFLG1CQUFtQixDQUFFO2FBQ3BEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEZpbGVEcm9wRGlyZWN0aXZlIH0gZnJvbSAnLi9maWxlLWRyb3AuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgRmlsZVNlbGVjdERpcmVjdGl2ZSB9IGZyb20gJy4vZmlsZS1zZWxlY3QuZGlyZWN0aXZlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogWyBDb21tb25Nb2R1bGUgXSxcclxuICBkZWNsYXJhdGlvbnM6IFsgRmlsZURyb3BEaXJlY3RpdmUsIEZpbGVTZWxlY3REaXJlY3RpdmUgXSxcclxuICBleHBvcnRzOiBbIEZpbGVEcm9wRGlyZWN0aXZlLCBGaWxlU2VsZWN0RGlyZWN0aXZlIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEZpbGVVcGxvYWRNb2R1bGUge1xyXG59XHJcbiJdfQ==