package com.reactnative.ivpusic.imagepicker;

import android.content.Context;

import com.facebook.react.bridge.WritableMap;
import com.zhihu.matisse.MimeType;
import com.zhihu.matisse.filter.Filter;
import com.zhihu.matisse.internal.entity.IncapableCause;
import com.zhihu.matisse.internal.entity.Item;

import java.util.Set;

import static android.media.ExifInterface.TAG_GPS_LATITUDE;
import static android.media.ExifInterface.TAG_GPS_LONGITUDE;

/**
 * Created by nico on 11.02.18.
 */

public class ExifFilter extends Filter {

    private String lastSelected;

    @Override
    protected Set<MimeType> constraintTypes() {
        return MimeType.of(MimeType.JPEG, MimeType.PNG);
    }

    @Override
    public IncapableCause filter(Context context, Item item) {
        if (!needFiltering(context, item))
            return null;

        try {
            String path = RealPathUtil.getRealPathFromURI(context, item.getContentUri());
            WritableMap exif = ExifExtractor.extract(path);
            if ((exif.getString(TAG_GPS_LATITUDE) == null || exif.getString(TAG_GPS_LONGITUDE) == null) && !(item.getContentUri().getPath().equals(lastSelected))) {
                this.lastSelected = item.getContentUri().getPath();
                return new IncapableCause(IncapableCause.TOAST, "The selected image contains no GPS data! Press again to select anyhow.");
            }

        } catch (Exception e) {
            e.printStackTrace();
            if (!(item.getContentUri().getPath().equals(lastSelected)))
                this.lastSelected = item.getContentUri().getPath();
                return new IncapableCause(IncapableCause.TOAST, "The selected image contains no GPS data! Press again to select anyhow.");
        }
        this.lastSelected = item.getContentUri().getPath();
        return null;
    }
}
