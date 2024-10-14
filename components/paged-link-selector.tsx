"use client";

import { useState } from "react";
import LinkSelector from "./link-selector";
import { Button } from "./ui/button";
import { LinkSelectorLinkData } from "./link-selector-link";

type PagedLinkSelectorProps = {
    links: LinkSelectorLinkData[];
    startPage?: number;
    pageSize?: number;
}

function chunkArray<T>(array: T[], chunkSize: number): T[][] {
    const chunks: T[][] = [];
    const numChunks = Math.ceil(array.length / chunkSize);
  
    for (let i = 0; i < numChunks; i++) {
      const start = i * chunkSize;
      const end = Math.min(start + chunkSize, array.length);
      chunks.push(array.slice(start, end));
    }
  
    return chunks;
}

const getPageRange = (currentPage: number, totalPages: number) => {
    const range = [];
    for (let i = Math.max(0, currentPage - 2); i <= Math.min(totalPages - 1, currentPage + 2); i++) {
        range.push(i);
    }
    return range;
};

const PagedLinkSelector = (props: PagedLinkSelectorProps) => {
    const [page, setPage] = useState<number>(props.startPage || 0);
    const [pageSize, setPageSize] = useState<number>(props.pageSize || 10);

    const paged_brand_links = chunkArray(props.links, pageSize);
    const pageRange = getPageRange(page, paged_brand_links.length);

    return (
        <div>
            <LinkSelector links={paged_brand_links[page]} />
            <div className="flex justify-between mt-8">
                <Button variant="ghost" onClick={() => setPage(page - 1)} disabled={page === 0}>
                    Previous
                </Button>
                <Button variant="ghost" onClick={() => setPage(0)} disabled={page === 0}>
                    First
                </Button>
                {pageRange.map((pageIndex) => (
                    <Button
                        className="hidden md:block lg:block xl:block"
                        key={pageIndex}
                        variant="ghost"
                        onClick={() => setPage(pageIndex)}
                        disabled={page === pageIndex}
                    >
                        {pageIndex + 1}
                    </Button>
                ))}
                <Button variant="ghost" onClick={() => setPage(paged_brand_links.length - 1)} disabled={page === paged_brand_links.length - 1}>
                    Last
                </Button>
                <Button variant="ghost" onClick={() => setPage(page + 1)} disabled={page === paged_brand_links.length - 1}>
                    Next
                </Button>
            </div>
        </div>
    )
};

export default PagedLinkSelector;