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
        FNumber: string;
        DateTime: string;
        ExposureTime: string;
        Flash: string;
        FocalLength: string;
        GPSAltitude: string;
        GPSAltitudeRef: string;
        GPSDateStamp: string;
        GPSLatitude: string;
        GPSLatitudeRef: string;
        GPSLongitude: string;
        GPSLongitudeRef: string;
        GPSProcessingMethod: string;
        GPSTimeStamp: string;
        ImageLength: string;
        ImageWidth: string;
        ISOSpeedRatings: string;
        Make: string;
        Model: string;
        Orientation: string;
        WhiteBalance: string;
    }

    interface AndroidLevel23 {
        DateTime: string;
        DateTimeDigitized: string;
        SubSecTime: string;
        SubSecTimeDigitized: string;
        SubSecTimeOriginal: string;
    }

    interface AndroidLevel24 {
        GPSImgDirection: string;
        GPSImgDirectionRef: string;
        GPSMapDatum: string;
        GPSMeasureMode: string;
        GPSSatellites: string;
        GPSSpeed: string;
        GPSSpeedRef: string;
        GPSStatus: string;
        GPSTrack: string;
        GPSTrackRef: string;
        GPSVersionID: string;
        ImageDescription: string;
        ImageUniqueID: string;
        InteroperabilityIndex: string;
        ISOSpeedRatings: string; 
        JPEGInterchangeFormat: string;
        JPEGInterchangeFormatLength: string;
        LightSource: string;
        Make: string;
        MakerNote: string;
        MaxApertureValue: string;
        MeteringMode: string;
        OECF: string;
        PhotometricInterpretation: string;
        PixelXDimension: string;
        PixelYDimension: string;
        PlanarConfiguration: string;
        PrimaryChromaticities: string;
        ReferenceBlackWhite: string;
        RelatedSoundFile: string;
        ResolutionUnit: string;
        RowsPerStrip: string;
        SamplesPerPixel: string;
        Saturation: string;
        SceneCaptureType: string;
        SceneType: string;
        SensingMethod: string;
        Sharpness: string;
        ShutterSpeedValue: string;
        Software: string;
        SpatialFrequencyResponse: string;
        SpectralSensitivity: string;
        StripByteCounts: string;
        StripOffsets: string;
        SubjectArea: string;
        SubjectDistance: string;
        SubjectDistanceRange: string;
        SubjectLocation: string;
        SubSecTime: string;
        SubSecTimeDigitized: string; SubSecTimeOriginal: string; 
        ThumbnailImageLength: string;
        ThumbnailImageWidth: string;
        TransferFunction: string;
        UserComment: string;
        WhitePoint: string;
        XResolution: string;
        YResolution: string;
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

    export type ExifAndroid = Partial<AndroidBasic> & Partial<AndroidLevel23> & Partial<AndroidLevel24>;

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
