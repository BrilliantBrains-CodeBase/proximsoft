import { useEffect } from "react";

interface MetaOptions {
  title: string;
  description?: string;
}

const useMeta = ({ title, description }: MetaOptions) => {
  useEffect(() => {
    document.title = title;

    if (description) {
      let meta = document.querySelector(
        'meta[name="description"]'
      ) as HTMLMetaElement | null;

      if (!meta) {
        meta = document.createElement("meta");
        meta.name = "description";
        document.head.appendChild(meta);
      }

      meta.content = description;
    }
  }, [title, description]);
};

export default useMeta;
