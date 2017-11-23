package com.reactnative.ivpusic.imagepicker;

import android.app.Activity;
import android.graphics.Bitmap;
import android.os.Environment;
import android.util.Log;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReadableMap;

import java.io.File;
import java.io.IOException;

import id.zelory.compressor.Compressor;
import io.reactivex.android.schedulers.AndroidSchedulers;
import io.reactivex.functions.Consumer;
import io.reactivex.schedulers.Schedulers;

/**
 * Created by ipusic on 12/27/16.
 */

class Compression {

    void compressImageAsync(final Activity activity, final ReadableMap options, final String originalImagePath, String compressedImagePath, String md5, Consumer onSuccess, Consumer onError) throws IOException {
        Integer maxWidth = options.hasKey("compressImageMaxWidth") ? options.getInt("compressImageMaxWidth") : null;
        Integer maxHeight = options.hasKey("compressImageMaxHeight") ? options.getInt("compressImageMaxHeight") : null;
        Double quality = options.hasKey("compressImageQuality") ? options.getDouble("compressImageQuality") : null;

        if (maxWidth == null && maxHeight == null && quality == null) {
            Log.d("image-crop-picker", "Skipping image compression");
            try {
                onSuccess.accept(new File(originalImagePath));
                return;
            } catch (Exception e) {
                e.printStackTrace();
            }
        }

        Log.d("image-crop-picker", "Image compression activated");
        Compressor compressor = new Compressor(activity)
                .setCompressFormat(Bitmap.CompressFormat.JPEG)
                .setDestinationDirectoryPath(compressedImagePath);

        if (quality == null) {
            Log.d("image-crop-picker", "Compressing image with quality 100");
            compressor.setQuality(100);
        } else {
            Log.d("image-crop-picker", "Compressing image with quality " + (quality * 100));
            compressor.setQuality((int) (quality * 100));
        }

        if (maxWidth != null) {
            Log.d("image-crop-picker", "Compressing image with max width " + maxWidth);
            compressor.setMaxWidth(maxWidth);
        }

        if (maxHeight != null) {
            Log.d("image-crop-picker", "Compressing image with max height " + maxHeight);
            compressor.setMaxHeight(maxHeight);
        }

        compressor.compressToFileAsFlowable(new File(originalImagePath), md5)
                .subscribeOn(Schedulers.io())
                .observeOn(AndroidSchedulers.mainThread())
                .subscribe(onSuccess, onError);

    }

    synchronized void compressVideo(final Activity activity, final ReadableMap options, final String originalVideo, final String compressedVideo, final Promise promise) {
        // todo: video compression
        // failed attempt 1: ffmpeg => slow and licensing issues
        promise.resolve(originalVideo);
    }
}
