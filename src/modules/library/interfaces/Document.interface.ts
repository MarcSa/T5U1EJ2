export interface Document {
    key: string;
    title: string;
    cover_i?: number;
    has_fulltext?: boolean;
    edition_count?: number;
    author_name?: string[];
    first_publish_year?: number;
    ia?: string[];
    author_key?: string[];
    public_scan_b?: boolean;
}
