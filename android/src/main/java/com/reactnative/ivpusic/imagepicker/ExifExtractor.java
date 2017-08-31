package com.reactnative.ivpusic.imagepicker;

import android.media.ExifInterface;
import android.os.Build;

import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static android.media.ExifInterface.*;

/**
 * Created by nico1510 on 15.06.17.
 */

public class ExifExtractor {


    public static WritableMap extract(String path) throws IOException {
        WritableMap exifData = new WritableNativeMap();

        List<String> attributes = getBasicAttributes();

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            attributes.addAll(getLevel23Attributes());
        }

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N) {
            attributes.addAll(getLevel24Attributes());
        }

        ExifInterface exif = new ExifInterface(path);

        for (String attribute : attributes) {
            String value = exif.getAttribute(attribute);
            exifData.putString(attribute, value);
        }

        return exifData;
    }

    private static List<String> getBasicAttributes() {
        return new ArrayList<String>(Arrays.asList(
                TAG_APERTURE,
                TAG_DATETIME,
                TAG_EXPOSURE_TIME,
                TAG_FLASH,
                TAG_FOCAL_LENGTH,
                TAG_GPS_ALTITUDE,
                TAG_GPS_ALTITUDE_REF,
                TAG_GPS_DATESTAMP,
                TAG_GPS_LATITUDE,
                TAG_GPS_LATITUDE_REF,
                TAG_GPS_LONGITUDE,
                TAG_GPS_LONGITUDE_REF,
                TAG_GPS_PROCESSING_METHOD,
                TAG_GPS_TIMESTAMP,
                TAG_IMAGE_LENGTH,
                TAG_IMAGE_WIDTH,
                TAG_ISO,
                TAG_MAKE,
                TAG_MODEL,
                TAG_ORIENTATION,
                TAG_WHITE_BALANCE
        ));
    }

    private static List<String> getLevel23Attributes() {
        return new ArrayList<String>(Arrays.asList(
                TAG_DATETIME_DIGITIZED,
                TAG_SUBSEC_TIME,
                TAG_SUBSEC_TIME_DIG,
                TAG_SUBSEC_TIME_ORIG
        ));
    }

    private static List<String> getLevel24Attributes() {
        return new ArrayList<String>(Arrays.asList(
                TAG_GPS_IMG_DIRECTION,
                TAG_GPS_IMG_DIRECTION_REF,
                TAG_GPS_MAP_DATUM,
                TAG_GPS_MEASURE_MODE,
                TAG_GPS_SATELLITES,
                TAG_GPS_SPEED,
                TAG_GPS_SPEED_REF,
                TAG_GPS_STATUS,
                TAG_GPS_TRACK,
                TAG_GPS_TRACK_REF,
                TAG_GPS_VERSION_ID,
                TAG_IMAGE_DESCRIPTION,
                TAG_IMAGE_UNIQUE_ID,
                TAG_INTEROPERABILITY_INDEX,
                TAG_ISO_SPEED_RATINGS,
                TAG_JPEG_INTERCHANGE_FORMAT,
                TAG_JPEG_INTERCHANGE_FORMAT_LENGTH,
                TAG_LIGHT_SOURCE,
                TAG_MAKER_NOTE,
                TAG_MAX_APERTURE_VALUE,
                TAG_METERING_MODE,
                TAG_OECF,
                TAG_PHOTOMETRIC_INTERPRETATION,
                TAG_PIXEL_X_DIMENSION,
                TAG_PIXEL_Y_DIMENSION,
                TAG_PLANAR_CONFIGURATION,
                TAG_PRIMARY_CHROMATICITIES,
                TAG_REFERENCE_BLACK_WHITE,
                TAG_RELATED_SOUND_FILE,
                TAG_RESOLUTION_UNIT,
                TAG_ROWS_PER_STRIP,
                TAG_SAMPLES_PER_PIXEL,
                TAG_SATURATION,
                TAG_SCENE_CAPTURE_TYPE,
                TAG_SCENE_TYPE,
                TAG_SENSING_METHOD,
                TAG_SHARPNESS,
                TAG_SHUTTER_SPEED_VALUE,
                TAG_SOFTWARE,
                TAG_SPATIAL_FREQUENCY_RESPONSE,
                TAG_SPECTRAL_SENSITIVITY,
                TAG_STRIP_BYTE_COUNTS,
                TAG_STRIP_OFFSETS,
                TAG_SUBJECT_AREA,
                TAG_SUBJECT_DISTANCE,
                TAG_SUBJECT_DISTANCE_RANGE,
                TAG_SUBJECT_LOCATION,
                TAG_SUBSEC_TIME_DIGITIZED,
                TAG_SUBSEC_TIME_ORIGINAL,
                TAG_THUMBNAIL_IMAGE_LENGTH,
                TAG_THUMBNAIL_IMAGE_WIDTH,
                TAG_TRANSFER_FUNCTION,
                TAG_USER_COMMENT,
                TAG_WHITE_POINT,
                TAG_X_RESOLUTION,
                TAG_Y_RESOLUTION
        ));
    }
}
