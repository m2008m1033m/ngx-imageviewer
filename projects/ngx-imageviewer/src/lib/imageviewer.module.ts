import { NgModule } from '@angular/core';
import { ImageViewerComponent } from './imageviewer.component';
import { IMAGEVIEWER_CONFIG, IMAGEVIEWER_CONFIG_DEFAULT } from './imageviewer.config';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule,],
  providers: [{ provide: IMAGEVIEWER_CONFIG, useValue: IMAGEVIEWER_CONFIG_DEFAULT }],
  declarations: [ImageViewerComponent],
  exports: [ImageViewerComponent],
})
export class ImageViewerModule { }
