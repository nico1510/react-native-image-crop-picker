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
        DateTimeDigitized: string;        
        ExposureMode: number;
        ExposureProgram: number;
        ExposureTime: number;
        FNumber: number;
        Flash: number;
        FocalLenIn35mmFilm: number;
        FocalLength: number;
        ISOSpeedRatings: number[];
        MaxApertureValue: number;
        MeteringMode: number;
        PixelXDimension: number;
        PixelYDimension: number;
        SceneCaptureType: number;
        SensingMethod: string;
        ShutterSpeedValue: number;
        SubjectDistance: string;
        UserComment: string;
        WhiteBalance: number;
    }

    export interface ExifIosGps {
        Altitude: number;
        AltitudeRef: number;
        DateStamp: string;
        TimeStamp: string;
        DestLatitude: string;
        DestLatitudeRef: 'N' | 'S';
        DestLongitude: string;
        DestLongitudeRef: 'W' | 'E';
        ImgDirection: number;
        ImgDirectionRef: string;
        Latitude: number;
        LatitudeRef: 'N' | 'S';
        Longitude: number;
        LongitudeRef: 'W' | 'E';
    }

    export interface ExifIosJiff {
        DensityUnit: number;
        XDensity: number;
        YDensity: number;
    }

    export interface ExifIosTiff {
        Orientation: number;
        ResolutionUnit: number;
        XResolution: number;
        YResolution: number;
        Model: string;
        Make: string;
        Software: string;
    }

    export type ExifIos = Partial<{
        ColorModel: string;
        DPIHeight: number;
        DPIWidth: number;
        Depth: number;
        Orientation: number;
        PixelHeight: number;
        PixelWidth: number;
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
        md5: string;
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
