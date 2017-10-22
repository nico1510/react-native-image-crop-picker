declare module "react-native-image-crop-picker" {
    export interface Options {
        cropping?: boolean;
        width?: number;
        height?: number;
        multiple?: boolean;
        path?: string;
        includeBase64?: boolean;
        includeMd5Hash: boolean;
        includeExif?: boolean;
        cropperTintColor?: string;
        cropperCircleOverlay?: boolean;
        maxFiles?: number;
        waitAnimationEnd?: boolean;
        smartAlbums?: string[];
        useFrontCamera?: boolean;
        compressVideoPreset?: string;
        compressImageMaxWidth?: number;
        compressImageMaxHeight?: number;
        compressImageQuality?: number;
        loadingLabelText?: string;
        mediaType?: string;
        showsSelectedCount?: boolean;
        showCropGuidelines?: boolean;
        hideBottomControls?: boolean;
        enableRotationGesture?: boolean;
    }

    interface AndroidBasic {
        FNumber: string | null;
        DateTime: string | null;
        ExposureTime: string | null;
        Flash: string | null;
        FocalLength: string | null;
        GPSAltitude: string | null;
        GPSAltitudeRef: string | null;
        GPSDateStamp: string | null;
        GPSLatitude: string | null;
        GPSLatitudeRef: string | null;
        GPSLongitude: string | null;
        GPSLongitudeRef: string | null;
        GPSProcessingMethod: string | null;
        GPSTimeStamp: string | null;
        ImageLength: string | null;
        ImageWidth: string | null;
        ISOSpeedRatings: string | null;
        Make: string | null;
        Model: string | null;
        Orientation: string | null;
        WhiteBalance: string | null;
    }

    interface AndroidLevel23 {
        DateTime: string | null;
        DateTimeDigitized: string | null;
        SubSecTime: string | null;
        SubSecTimeDigitized: string | null;
        SubSecTimeOriginal: string | null;
    }

    interface AndroidLevel24 {
        GPSImgDirection: string | null;
        GPSImgDirectionRef: string | null;
        GPSMapDatum: string | null;
        GPSMeasureMode: string | null;
        GPSSatellites: string | null;
        GPSSpeed: string | null;
        GPSSpeedRef: string | null;
        GPSStatus: string | null;
        GPSTrack: string | null;
        GPSTrackRef: string | null;
        GPSVersionID: string | null;
        ImageDescription: string | null;
        ImageUniqueID: string | null;
        InteroperabilityIndex: string | null;
        ISOSpeedRatings: string | null;
        JPEGInterchangeFormat: string | null;
        JPEGInterchangeFormatLength: string | null;
        LightSource: string | null;
        Make: string | null;
        MakerNote: string | null;
        MaxApertureValue: string | null;
        MeteringMode: string | null;
        OECF: string | null;
        PhotometricInterpretation: string | null;
        PixelXDimension: string | null;
        PixelYDimension: string | null;
        PlanarConfiguration: string | null;
        PrimaryChromaticities: string | null;
        ReferenceBlackWhite: string | null;
        RelatedSoundFile: string | null;
        ResolutionUnit: string | null;
        RowsPerStrip: string | null;
        SamplesPerPixel: string | null;
        Saturation: string | null;
        SceneCaptureType: string | null;
        SceneType: string | null;
        SensingMethod: string | null;
        Sharpness: string | null;
        ShutterSpeedValue: string | null;
        Software: string | null;
        SpatialFrequencyResponse: string | null;
        SpectralSensitivity: string | null;
        StripByteCounts: string | null;
        StripOffsets: string | null;
        SubjectArea: string | null;
        SubjectDistance: string | null;
        SubjectDistanceRange: string | null;
        SubjectLocation: string | null;
        SubSecTime: string | null;
        SubSecTimeDigitized: string | null;
        SubSecTimeOriginal: string | null;
        ThumbnailImageLength: string | null;
        ThumbnailImageWidth: string | null;
        TransferFunction: string | null;
        UserComment: string | null;
        WhitePoint: string | null;
        XResolution: string | null;
        YResolution: string | null;
    }

    export interface ExifIosExif {
        ApertureValue: string;
        BrightnessValue: string;
        ColorSpace: string;
        ExposureMode: string;
        ExposureProgram: string;
        ExposureTime: string;
        FNumber: string;
        Flash: string;
        FocalLenIn35mmFilm: string;
        FocalLength: string;
        MeteringMode: string;
        PixelXDimension: string;
        PixelYDimension: string;
        SceneCaptureType: string;
        SensingMethod: string;
        ShutterSpeedValue: string;
        SubjectDistance: string;
        UserComment: string;
        WhiteBalance: string;
    }

    export interface ExifIosGps {
        DateStamp: string;
        DestLatitude: string;
        DestLatitudeRef: 'N' | 'S';
        DestLongitude: string;
        DestLongitudeRef: 'W' | 'E';
        ImgDirection: string | undefined;
        Latitude: string;
        LatitudeRef: 'N' | 'S';
        Longitude: string;
        LongitudeRef: 'W' | 'E';
    }

    export interface ExifIosJiff {
        DensityUnit: string;
        XDensity: string;
        YDensity: string;
    }

    export interface ExifIosTiff {
        Orientation: string;
        ResolutionUnit: string;
        XResolution: string;
        YResolution: string;
    }

    export type ExifIos = Partial<{
        ColorModel: string;
        DPIHeight: string;
        DPIWidth: string;
        Depth: string;
        Orientation: string;
        PixelHeight: string;
        PixelWidth: string;
        "{Exif}": ExifIosExif;
        "{GPS}": ExifIosGps;
        "{JFIF}": ExifIosJiff;
        "{TIFF}": ExifIosTiff;
    }>

    export type ExifAndroid = AndroidBasic & Partial<AndroidLevel23> & Partial<AndroidLevel24>;

    export type Exif = ExifAndroid | ExifIos;

    export interface Image {
        path: string;
        size: number;
        data: null | string;
        md5: null | string;
        width: number;
        height: number;
        mime: string;
        exif: Exif | null;
    }

    export function openPicker(options: Options): Promise<Image | Image[]>;
    export function openCamera(options: Options): Promise<Image | Image[]>;
    export function openCropper(options: Options): Promise<Image>;
    export function clean(): Promise<void>;
    export function cleanSingle(path: string): Promise<void>;

    export default {
        openPicker,
        openCamera,
        openCropper,
        clean,
        cleanSingle
    }
}
