export class FileType {
    static getMimeClass(file) {
        let mimeClass = 'application';
        if (this.mime_psd.indexOf(file.type) !== -1) {
            mimeClass = 'image';
        }
        else if (file.type.match('image.*')) {
            mimeClass = 'image';
        }
        else if (file.type.match('video.*')) {
            mimeClass = 'video';
        }
        else if (file.type.match('audio.*')) {
            mimeClass = 'audio';
        }
        else if (file.type === 'application/pdf') {
            mimeClass = 'pdf';
        }
        else if (this.mime_compress.indexOf(file.type) !== -1) {
            mimeClass = 'compress';
        }
        else if (this.mime_doc.indexOf(file.type) !== -1) {
            mimeClass = 'doc';
        }
        else if (this.mime_xsl.indexOf(file.type) !== -1) {
            mimeClass = 'xls';
        }
        else if (this.mime_ppt.indexOf(file.type) !== -1) {
            mimeClass = 'ppt';
        }
        if (mimeClass === 'application') {
            mimeClass = this.fileTypeDetection(file.name);
        }
        return mimeClass;
    }
    static fileTypeDetection(inputFilename) {
        let types = {
            'jpg': 'image',
            'jpeg': 'image',
            'tif': 'image',
            'psd': 'image',
            'bmp': 'image',
            'png': 'image',
            'nef': 'image',
            'tiff': 'image',
            'cr2': 'image',
            'dwg': 'image',
            'cdr': 'image',
            'ai': 'image',
            'indd': 'image',
            'pin': 'image',
            'cdp': 'image',
            'skp': 'image',
            'stp': 'image',
            '3dm': 'image',
            'mp3': 'audio',
            'wav': 'audio',
            'wma': 'audio',
            'mod': 'audio',
            'm4a': 'audio',
            'compress': 'compress',
            'zip': 'compress',
            'rar': 'compress',
            '7z': 'compress',
            'lz': 'compress',
            'z01': 'compress',
            'bz2': 'compress',
            'gz': 'compress',
            'pdf': 'pdf',
            'xls': 'xls',
            'xlsx': 'xls',
            'ods': 'xls',
            'mp4': 'video',
            'avi': 'video',
            'wmv': 'video',
            'mpg': 'video',
            'mts': 'video',
            'flv': 'video',
            '3gp': 'video',
            'vob': 'video',
            'm4v': 'video',
            'mpeg': 'video',
            'm2ts': 'video',
            'mov': 'video',
            'doc': 'doc',
            'docx': 'doc',
            'eps': 'doc',
            'txt': 'doc',
            'odt': 'doc',
            'rtf': 'doc',
            'ppt': 'ppt',
            'pptx': 'ppt',
            'pps': 'ppt',
            'ppsx': 'ppt',
            'odp': 'ppt'
        };
        let chunks = inputFilename.split('.');
        if (chunks.length < 2) {
            return 'application';
        }
        let extension = chunks[chunks.length - 1].toLowerCase();
        if (types[extension] === undefined) {
            return 'application';
        }
        else {
            return types[extension];
        }
    }
}
/*  MS office  */
FileType.mime_doc = [
    'application/msword',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
    'application/vnd.ms-word.document.macroEnabled.12',
    'application/vnd.ms-word.template.macroEnabled.12'
];
FileType.mime_xsl = [
    'application/vnd.ms-excel',
    'application/vnd.ms-excel',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.template',
    'application/vnd.ms-excel.sheet.macroEnabled.12',
    'application/vnd.ms-excel.template.macroEnabled.12',
    'application/vnd.ms-excel.addin.macroEnabled.12',
    'application/vnd.ms-excel.sheet.binary.macroEnabled.12'
];
FileType.mime_ppt = [
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'application/vnd.openxmlformats-officedocument.presentationml.template',
    'application/vnd.openxmlformats-officedocument.presentationml.slideshow',
    'application/vnd.ms-powerpoint.addin.macroEnabled.12',
    'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
    'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
    'application/vnd.ms-powerpoint.slideshow.macroEnabled.12'
];
/* PSD */
FileType.mime_psd = [
    'image/photoshop',
    'image/x-photoshop',
    'image/psd',
    'application/photoshop',
    'application/psd',
    'zz-application/zz-winassoc-psd'
];
/* Compressed files */
FileType.mime_compress = [
    'application/x-gtar',
    'application/x-gcompress',
    'application/compress',
    'application/x-tar',
    'application/x-rar-compressed',
    'application/octet-stream',
    'application/x-zip-compressed',
    'application/zip-compressed',
    'application/x-7z-compressed',
    'application/gzip',
    'application/x-bzip2'
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS10eXBlLmNsYXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2ZpbGUtdXBsb2FkL2ZpbGUtdHlwZS5jbGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLE9BQU8sUUFBUTtJQTREWixNQUFNLENBQUMsWUFBWSxDQUFDLElBQW9CO1FBQzdDLElBQUksU0FBUyxHQUFHLGFBQWEsQ0FBQztRQUM5QixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUMzQyxTQUFTLEdBQUcsT0FBTyxDQUFDO1NBQ3JCO2FBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNyQyxTQUFTLEdBQUcsT0FBTyxDQUFDO1NBQ3JCO2FBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNyQyxTQUFTLEdBQUcsT0FBTyxDQUFDO1NBQ3JCO2FBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNyQyxTQUFTLEdBQUcsT0FBTyxDQUFDO1NBQ3JCO2FBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLGlCQUFpQixFQUFFO1lBQzFDLFNBQVMsR0FBRyxLQUFLLENBQUM7U0FDbkI7YUFBTSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUN2RCxTQUFTLEdBQUcsVUFBVSxDQUFDO1NBQ3hCO2FBQU0sSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDbEQsU0FBUyxHQUFHLEtBQUssQ0FBQztTQUNuQjthQUFN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bmRleFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZpbGVUeXBlIHtcclxuICAvKiAgTVMgb2ZmaWNlICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgbWltZV9kb2M6IHN0cmluZ1tdID0gW1xyXG4gICAgJ2FwcGxpY2F0aW9uL21zd29yZCcsXHJcbiAgICAnYXBwbGljYXRpb24vbXN3b3JkJyxcclxuICAgICdhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQud29yZHByb2Nlc3NpbmdtbC5kb2N1bWVudCcsXHJcbiAgICAnYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LndvcmRwcm9jZXNzaW5nbWwudGVtcGxhdGUnLFxyXG4gICAgJ2FwcGxpY2F0aW9uL3ZuZC5tcy13b3JkLmRvY3VtZW50Lm1hY3JvRW5hYmxlZC4xMicsXHJcbiAgICAnYXBwbGljYXRpb24vdm5kLm1zLXdvcmQudGVtcGxhdGUubWFjcm9FbmFibGVkLjEyJ1xyXG4gIF07XHJcbiAgcHVibGljIHN0YXRpYyBtaW1lX3hzbDogc3RyaW5nW10gPSBbXHJcbiAgICAnYXBwbGljYXRpb24vdm5kLm1zLWV4Y2VsJyxcclxuICAgICdhcHBsaWNhdGlvbi92bmQubXMtZXhjZWwnLFxyXG4gICAgJ2FwcGxpY2F0aW9uL3ZuZC5tcy1leGNlbCcsXHJcbiAgICAnYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnNwcmVhZHNoZWV0bWwuc2hlZXQnLFxyXG4gICAgJ2FwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC5zcHJlYWRzaGVldG1sLnRlbXBsYXRlJyxcclxuICAgICdhcHBsaWNhdGlvbi92bmQubXMtZXhjZWwuc2hlZXQubWFjcm9FbmFibGVkLjEyJyxcclxuICAgICdhcHBsaWNhdGlvbi92bmQubXMtZXhjZWwudGVtcGxhdGUubWFjcm9FbmFibGVkLjEyJyxcclxuICAgICdhcHBsaWNhdGlvbi92bmQubXMtZXhjZWwuYWRkaW4ubWFjcm9FbmFibGVkLjEyJyxcclxuICAgICdhcHBsaWNhdGlvbi92bmQubXMtZXhjZWwuc2hlZXQuYmluYXJ5Lm1hY3JvRW5hYmxlZC4xMidcclxuICBdO1xyXG4gIHB1YmxpYyBzdGF0aWMgbWltZV9wcHQ6IHN0cmluZ1tdID0gW1xyXG4gICAgJ2FwcGxpY2F0aW9uL3ZuZC5tcy1wb3dlcnBvaW50JyxcclxuICAgICdhcHBsaWNhdGlvbi92bmQubXMtcG93ZXJwb2ludCcsXHJcbiAgICAnYXBwbGljYXRpb24vdm5kLm1zLXBvd2VycG9pbnQnLFxyXG4gICAgJ2FwcGxpY2F0aW9uL3ZuZC5tcy1wb3dlcnBvaW50JyxcclxuICAgICdhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQucHJlc2VudGF0aW9ubWwucHJlc2VudGF0aW9uJyxcclxuICAgICdhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQucHJlc2VudGF0aW9ubWwudGVtcGxhdGUnLFxyXG4gICAgJ2FwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC5wcmVzZW50YXRpb25tbC5zbGlkZXNob3cnLFxyXG4gICAgJ2FwcGxpY2F0aW9uL3ZuZC5tcy1wb3dlcnBvaW50LmFkZGluLm1hY3JvRW5hYmxlZC4xMicsXHJcbiAgICAnYXBwbGljYXRpb24vdm5kLm1zLXBvd2VycG9pbnQucHJlc2VudGF0aW9uLm1hY3JvRW5hYmxlZC4xMicsXHJcbiAgICAnYXBwbGljYXRpb24vdm5kLm1zLXBvd2VycG9pbnQucHJlc2VudGF0aW9uLm1hY3JvRW5hYmxlZC4xMicsXHJcbiAgICAnYXBwbGljYXRpb24vdm5kLm1zLXBvd2VycG9pbnQuc2xpZGVzaG93Lm1hY3JvRW5hYmxlZC4xMidcclxuICBdO1xyXG5cclxuICAvKiBQU0QgKi9cclxuICBwdWJsaWMgc3RhdGljIG1pbWVfcHNkOiBzdHJpbmdbXSA9IFtcclxuICAgICdpbWFnZS9waG90b3Nob3AnLFxyXG4gICAgJ2ltYWdlL3gtcGhvdG9zaG9wJyxcclxuICAgICdpbWFnZS9wc2QnLFxyXG4gICAgJ2FwcGxpY2F0aW9uL3Bob3Rvc2hvcCcsXHJcbiAgICAnYXBwbGljYXRpb24vcHNkJyxcclxuICAgICd6ei1hcHBsaWNhdGlvbi96ei13aW5hc3NvYy1wc2QnXHJcbiAgXTtcclxuXHJcbiAgLyogQ29tcHJlc3NlZCBmaWxlcyAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgbWltZV9jb21wcmVzczogc3RyaW5nW10gPSBbXHJcbiAgICAnYXBwbGljYXRpb24veC1ndGFyJyxcclxuICAgICdhcHBsaWNhdGlvbi94LWdjb21wcmVzcycsXHJcbiAgICAnYXBwbGljYXRpb24vY29tcHJlc3MnLFxyXG4gICAgJ2FwcGxpY2F0aW9uL3gtdGFyJyxcclxuICAgICdhcHBsaWNhdGlvbi94LXJhci1jb21wcmVzc2VkJyxcclxuICAgICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nLFxyXG4gICAgJ2FwcGxpY2F0aW9uL3gtemlwLWNvbXByZXNzZWQnLFxyXG4gICAgJ2FwcGxpY2F0aW9uL3ppcC1jb21wcmVzc2VkJyxcclxuICAgICdhcHBsaWNhdGlvbi94LTd6LWNvbXByZXNzZWQnLFxyXG4gICAgJ2FwcGxpY2F0aW9uL2d6aXAnLFxyXG4gICAgJ2FwcGxpY2F0aW9uL3gtYnppcDInXHJcbiAgXTtcclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXRNaW1lQ2xhc3MoZmlsZTogRmlsZUxpa2VPYmplY3QpOiBzdHJpbmcge1xyXG4gICAgbGV0IG1pbWVDbGFzcyA9ICdhcHBsaWNhdGlvbic7XHJcbiAgICBpZiAodGhpcy5taW1lX3BzZC5pbmRleE9mKGZpbGUudHlwZSkgIT09IC0xKSB7XHJcbiAgICAgIG1pbWVDbGFzcyA9ICdpbWFnZSc7XHJcbiAgICB9IGVsc2UgaWYgKGZpbGUudHlwZS5tYXRjaCgnaW1hZ2UuKicpKSB7XHJcbiAgICAgIG1pbWVDbGFzcyA9ICdpbWFnZSc7XHJcbiAgICB9IGVsc2UgaWYgKGZpbGUudHlwZS5tYXRjaCgndmlkZW8uKicpKSB7XHJcbiAgICAgIG1pbWVDbGFzcyA9ICd2aWRlbyc7XHJcbiAgICB9IGVsc2UgaWYgKGZpbGUudHlwZS5tYXRjaCgnYXVkaW8uKicpKSB7XHJcbiAgICAgIG1pbWVDbGFzcyA9ICdhdWRpbyc7XHJcbiAgICB9IGVsc2UgaWYgKGZpbGUudHlwZSA9PT0gJ2FwcGxpY2F0aW9uL3BkZicpIHtcclxuICAgICAgbWltZUNsYXNzID0gJ3BkZic7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMubWltZV9jb21wcmVzcy5pbmRleE9mKGZpbGUudHlwZSkgIT09IC0xKSB7XHJcbiAgICAgIG1pbWVDbGFzcyA9ICdjb21wcmVzcyc7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMubWltZV9kb2MuaW5kZXhPZihmaWxlLnR5cGUpICE9PSAtMSkge1xyXG4gICAgICBtaW1lQ2xhc3MgPSAnZG9jJztcclxuICAgIH0gZWxzZSBpZiAodGhpcy5taW1lX3hzbC5pbmRleE9mKGZpbGUudHlwZSkgIT09IC0xKSB7XHJcbiAgICAgIG1pbWVDbGFzcyA9ICd4bHMnO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLm1pbWVfcHB0LmluZGV4T2YoZmlsZS50eXBlKSAhPT0gLTEpIHtcclxuICAgICAgbWltZUNsYXNzID0gJ3BwdCc7XHJcbiAgICB9XHJcbiAgICBpZiAobWltZUNsYXNzID09PSAnYXBwbGljYXRpb24nKSB7XHJcbiAgICAgIG1pbWVDbGFzcyA9IHRoaXMuZmlsZVR5cGVEZXRlY3Rpb24oZmlsZS5uYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbWltZUNsYXNzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBmaWxlVHlwZURldGVjdGlvbihpbnB1dEZpbGVuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgbGV0IHR5cGVzOiB7IFsga2V5OiBzdHJpbmcgXTogc3RyaW5nIH0gPSB7XHJcbiAgICAgICdqcGcnOiAnaW1hZ2UnLFxyXG4gICAgICAnanBlZyc6ICdpbWFnZScsXHJcbiAgICAgICd0aWYnOiAnaW1hZ2UnLFxyXG4gICAgICAncHNkJzogJ2ltYWdlJyxcclxuICAgICAgJ2JtcCc6ICdpbWFnZScsXHJcbiAgICAgICdwbmcnOiAnaW1hZ2UnLFxyXG4gICAgICAnbmVmJzogJ2ltYWdlJyxcclxuICAgICAgJ3RpZmYnOiAnaW1hZ2UnLFxyXG4gICAgICAnY3IyJzogJ2ltYWdlJyxcclxuICAgICAgJ2R3Zyc6ICdpbWFnZScsXHJcbiAgICAgICdjZHInOiAnaW1hZ2UnLFxyXG4gICAgICAnYWknOiAnaW1hZ2UnLFxyXG4gICAgICAnaW5kZCc6ICdpbWFnZScsXHJcbiAgICAgICdwaW4nOiAnaW1hZ2UnLFxyXG4gICAgICAnY2RwJzogJ2ltYWdlJyxcclxuICAgICAgJ3NrcCc6ICdpbWFnZScsXHJcbiAgICAgICdzdHAnOiAnaW1hZ2UnLFxyXG4gICAgICAnM2RtJzogJ2ltYWdlJyxcclxuICAgICAgJ21wMyc6ICdhdWRpbycsXHJcbiAgICAgICd3YXYnOiAnYXVkaW8nLFxyXG4gICAgICAnd21hJzogJ2F1ZGlvJyxcclxuICAgICAgJ21vZCc6ICdhdWRpbycsXHJcbiAgICAgICdtNGEnOiAnYXVkaW8nLFxyXG4gICAgICAnY29tcHJlc3MnOiAnY29tcHJlc3MnLFxyXG4gICAgICAnemlwJzogJ2NvbXByZXNzJyxcclxuICAgICAgJ3Jhcic6ICdjb21wcmVzcycsXHJcbiAgICAgICc3eic6ICdjb21wcmVzcycsXHJcbiAgICAgICdseic6ICdjb21wcmVzcycsXHJcbiAgICAgICd6MDEnOiAnY29tcHJlc3MnLFxyXG4gICAgICAnYnoyJzogJ2NvbXByZXNzJyxcclxuICAgICAgJ2d6JzogJ2NvbXByZXNzJyxcclxuICAgICAgJ3BkZic6ICdwZGYnLFxyXG4gICAgICAneGxzJzogJ3hscycsXHJcbiAgICAgICd4bHN4JzogJ3hscycsXHJcbiAgICAgICdvZHMnOiAneGxzJyxcclxuICAgICAgJ21wNCc6ICd2aWRlbycsXHJcbiAgICAgICdhdmknOiAndmlkZW8nLFxyXG4gICAgICAnd212JzogJ3ZpZGVvJyxcclxuICAgICAgJ21wZyc6ICd2aWRlbycsXHJcbiAgICAgICdtdHMnOiAndmlkZW8nLFxyXG4gICAgICAnZmx2JzogJ3ZpZGVvJyxcclxuICAgICAgJzNncCc6ICd2aWRlbycsXHJcbiAgICAgICd2b2InOiAndmlkZW8nLFxyXG4gICAgICAnbTR2JzogJ3ZpZGVvJyxcclxuICAgICAgJ21wZWcnOiAndmlkZW8nLFxyXG4gICAgICAnbTJ0cyc6ICd2aWRlbycsXHJcbiAgICAgICdtb3YnOiAndmlkZW8nLFxyXG4gICAgICAnZG9jJzogJ2RvYycsXHJcbiAgICAgICdkb2N4JzogJ2RvYycsXHJcbiAgICAgICdlcHMnOiAnZG9jJyxcclxuICAgICAgJ3R4dCc6ICdkb2MnLFxyXG4gICAgICAnb2R0JzogJ2RvYycsXHJcbiAgICAgICdydGYnOiAnZG9jJyxcclxuICAgICAgJ3BwdCc6ICdwcHQnLFxyXG4gICAgICAncHB0eCc6ICdwcHQnLFxyXG4gICAgICAncHBzJzogJ3BwdCcsXHJcbiAgICAgICdwcHN4JzogJ3BwdCcsXHJcbiAgICAgICdvZHAnOiAncHB0J1xyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgY2h1bmtzID0gaW5wdXRGaWxlbmFtZS5zcGxpdCgnLicpO1xyXG4gICAgaWYgKGNodW5rcy5sZW5ndGggPCAyKSB7XHJcbiAgICAgIHJldHVybiAnYXBwbGljYXRpb24nO1xyXG4gICAgfVxyXG4gICAgbGV0IGV4dGVuc2lvbiA9IGNodW5rc1sgY2h1bmtzLmxlbmd0aCAtIDEgXS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgaWYgKHR5cGVzWyBleHRlbnNpb24gXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybiAnYXBwbGljYXRpb24nO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHR5cGVzWyBleHRlbnNpb24gXTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19