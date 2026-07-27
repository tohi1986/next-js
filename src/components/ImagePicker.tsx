"use client";

import { useState } from "react";

export default function ImagePicker() {
  const [preview, setPreview] = useState<string | null>(null);

  function handleImageChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = event.target.files?.[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    setPreview(imageUrl);
  }


  return (
    <div className="bg-black text-amber-500 flex justify-center">
      <input
        type="file"
        name="image"
        accept="image/*"
        onChange={handleImageChange}
      />

      {preview && (
        <img
          src={preview}
          alt="Preview"
          className="w-64 mt-4 rounded"
        />
      )}
    </div>
  );
}