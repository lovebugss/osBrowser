interface ObjectStorageOperate {

    has(bucket: string, key: string): string;

    list(bucket: string, prefix?: string): string;
}
