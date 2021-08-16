import { Directive, EventEmitter, ElementRef, Input, HostListener, Output } from '@angular/core';
import { FileUploader } from './file-uploader.class';
export class FileSelectDirective {
    constructor(element) {
        this.onFileSelected = new EventEmitter();
        this.element = element;
    }
    getOptions() {
        return this.uploader.options;
    }
    getFilters() {
        return {};
    }
    isEmptyAfterSelection() {
        return !!this.element.nativeElement.attributes.multiple;
    }
    onChange() {
        let files = this.element.nativeElement.files;
        let options = this.getOptions();
        let filters = this.getFilters();
        this.uploader.addToQueue(files, options, filters);
        this.onFileSelected.emit(files);
        if (this.isEmptyAfterSelection()) {
            this.element.nativeElement.value = '';
        }
    }
}
FileSelectDirective.decorators = [
    { type: Directive, args: [{ selector: '[ng2FileSelect]' },] }
];
/** @nocollapse */
FileSelectDirective.ctorParameters = () => [
    { type: ElementRef }
];
FileSelectDirective.propDecorators = {
    uploader: [{ type: Input }],
    onFileSelected: [{ type: Output }],
    onChange: [{ type: HostListener, args: ['change',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1zZWxlY3QuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2ZpbGUtdXBsb2FkL2ZpbGUtc2VsZWN0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakcsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBR3JELE1BQU0sT0FBTyxtQkFBbUI7SUFNOUIsWUFBbUIsT0FBbUI7UUFKckIsbUJBQWMsR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUtqRixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN6QixDQUFDO0lBRU0sVUFBVTtRQUNmLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7SUFDL0IsQ0FBQztJQUVNLFVBQVU7UUFDZixPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFTSxxQkFBcUI7UUFDMUIsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQztJQUMxRCxDQUFDO0lBR00sUUFBUTtRQUNiLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztRQUM3QyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDaEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBRWhDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFaEMsSUFBSSxJQUFJLENBQUMscUJBQXFCLEVBQUUsRUFBRTtZQUNoQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQzs7O1lBbkNGLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRTs7OztZQUpSLFVBQVU7Ozt1QkFNekMsS0FBSzs2QkFDTCxNQUFNO3VCQW9CTixZQUFZLFNBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBJbnB1dCwgSG9zdExpc3RlbmVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEZpbGVVcGxvYWRlciB9IGZyb20gJy4vZmlsZS11cGxvYWRlci5jbGFzcyc7XHJcblxyXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbbmcyRmlsZVNlbGVjdF0nIH0pXHJcbmV4cG9ydCBjbGFzcyBGaWxlU2VsZWN0RGlyZWN0aXZlIHtcclxuICBASW5wdXQoKSBwdWJsaWMgdXBsb2FkZXI6IEZpbGVVcGxvYWRlcjtcclxuICBAT3V0cHV0KCkgcHVibGljIG9uRmlsZVNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8RmlsZVtdPiA9IG5ldyBFdmVudEVtaXR0ZXI8RmlsZVtdPigpO1xyXG5cclxuICBwcm90ZWN0ZWQgZWxlbWVudDogRWxlbWVudFJlZjtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcclxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0T3B0aW9ucygpOiBhbnkge1xyXG4gICAgcmV0dXJuIHRoaXMudXBsb2FkZXIub3B0aW9ucztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRGaWx0ZXJzKCk6IGFueSB7XHJcbiAgICByZXR1cm4ge307XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNFbXB0eUFmdGVyU2VsZWN0aW9uKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICEhdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuYXR0cmlidXRlcy5tdWx0aXBsZTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NoYW5nZScpXHJcbiAgcHVibGljIG9uQ2hhbmdlKCk6IGFueSB7XHJcbiAgICBsZXQgZmlsZXMgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5maWxlcztcclxuICAgIGxldCBvcHRpb25zID0gdGhpcy5nZXRPcHRpb25zKCk7XHJcbiAgICBsZXQgZmlsdGVycyA9IHRoaXMuZ2V0RmlsdGVycygpO1xyXG5cclxuICAgIHRoaXMudXBsb2FkZXIuYWRkVG9RdWV1ZShmaWxlcywgb3B0aW9ucywgZmlsdGVycyk7XHJcbiAgICB0aGlzLm9uRmlsZVNlbGVjdGVkLmVtaXQoZmlsZXMpO1xyXG5cclxuICAgIGlmICh0aGlzLmlzRW1wdHlBZnRlclNlbGVjdGlvbigpKSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlID0gJyc7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==