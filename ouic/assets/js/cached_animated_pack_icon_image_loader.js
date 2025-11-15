const animatedIconEnabledLocalStorageID =
    "pack_icon_animated_enabled_8crafter_wiki_andexdb_(ea7d3bf9-c3c4-4bf5-9876-1b2f8cfb9ec0)";
const animatedIconCachedLocalStorageID =
    "pack_icon_animated_0.5x_frames_v2.svg_8crafter_wiki_andexdb_(ea7d3bf9-c3c4-4bf5-9876-1b2f8cfb9ec0)";
let cachedIcon = null;
let animatedIconEnabledInternal = true;

/**
 * Splits a given string into chunks of a specified size.
 *
 * @param {string} data - The string to be split into chunks.
 * @param {number|bigint} [chunkSize=32760] - The size of each chunk. Defaults to 32760. Can be a number or a bigint.
 *
 * @returns {string[]} An array of strings, where each string is a chunk of the original data.
 *
 * @throws {RangeError} If `chunkSize` is 0.
 * @throws {TypeError} If `data` is not a string.
 * @throws {TypeError} If `chunkSize` is neither a number nor a bigint.
 */
function splitUpStringData(data, chunkSize = 32760) {
    if (chunkSize == 0) {
        throw new RangeError(`chunkSize cannot be 0 (got ${chunkSize.toString()})`);
    }
    if (typeof data != "string") {
        throw new TypeError(
            `args[0]: Expected type of string but got type of ${typeof data} instead.`
        );
    }
    if (typeof chunkSize == "bigint") {
        const chunkSizeB = Number(chunkSize);
        let remainingData = data;
        /**
         * @type {string[]}
         */
        const splitData = [];
        for (let i = 0n; remainingData.length != 0; i++) {
            splitData.push(remainingData.slice(0, Math.min(remainingData.length, chunkSizeB)));
            remainingData = remainingData.slice(Math.min(remainingData.length, chunkSizeB));
        }
        return splitData;
    } else if (typeof chunkSize != "number") {
        throw new TypeError(
            `args[1]: Expected type of number but got type of ${typeof chunkSize} instead.`
        );
    } else {
        let remainingData = data;
        /**
         * @type {string[]}
         */
        let splitData = [];
        for (let i = 0n; remainingData.length != 0; i++) {
            splitData.push(remainingData.slice(0, Math.min(remainingData.length, chunkSize)));
            remainingData = remainingData.slice(Math.min(remainingData.length, chunkSize));
        }
        return splitData;
    }
}

/**
 * Saves a string to local storage, optionally clearing old properties first and splitting the string into chunks.
 *
 * @param {string} string - The string to save to local storage.
 * @param {string} propertyName - The name of the property to save the string under.
 * @param {boolean} clearOldProperties - Whether to clear old properties before saving the new string. Defaults to true.
 * @param {number | bigint} chunkSize - The size of each chunk to split the string into. Defaults to 32760.
 *
 * @throws {TypeError} If `propertyName` is not a string.
 * @throws {TypeError} If `clearOldProperties` is not a boolean.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function saveStringToLocalStorage(
    string,
    propertyName,
    clearOldProperties = true,
    chunkSize = 32760
) {
    if (typeof propertyName != "string") {
        throw new TypeError(
            `args[1]: Expected type of string but got type of ${typeof propertyName} instead.`
        );
    }
    if (typeof clearOldProperties != "boolean") {
        throw new TypeError(
            `args[2]: Expected type of boolean but got type of ${typeof clearOldProperties} instead.`
        );
    }
    if (clearOldProperties) {
        const length = Number(localStorage.getItem(`${propertyName}.length`) ?? 0);
        for (let i = 0n; i < length; i++) {
            localStorage.removeItem(`#splitString[${i}]:${propertyName}`);
        }
    }
    const data = splitUpStringData(string, chunkSize);
    localStorage.setItem(`${propertyName}.length`, data.length);
    data.forEach((s, i) => {
        localStorage.setItem(`#splitString[${i}]:${propertyName}`, s);
    });
}

/**
 * Retrieves a concatenated string from local storage based on the provided property name.
 *
 * @param {string} propertyName - The base name of the local storage to retrieve the string from.
 * @param {string} zeroLengthPlaceholder - A placeholder string to return if the length of the dynamic property is zero. Defaults to an empty string.
 * @returns {string} The concatenated string from the local storage, or the zeroLengthPlaceholder if the length is zero.
 * @throws {TypeError} If the provided propertyName is not a string.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getStringFromLocalStorage(propertyName, zeroLengthPlaceholder = "") {
    if (typeof propertyName != "string") {
        throw new TypeError(
            `args[0]: Expected type of string but got type of ${typeof propertyName} instead.`
        );
    }
    const length = Number(localStorage.getItem(`${propertyName}.length`) ?? 0);
    /**
     * @type {string[]}
     */
    const data = [];
    for (let i = 0n; i < length; i++) {
        data.push(localStorage.getItem(`#splitString[${i}]:${propertyName}`));
    }
    return length == 0 ? zeroLengthPlaceholder : data.join("");
}

/**
 * Deletes a string from local storage.
 *
 * @param {string} propertyName - The name of the property the string is saved under.
 *
 * @throws {TypeError} If `propertyName` is not a string.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function deleteStringFromLocalStorage(propertyName) {
    if (typeof propertyName != "string") {
        throw new TypeError(
            `args[0]: Expected type of string but got type of ${typeof propertyName} instead.`
        );
    }
    const length = Number(localStorage.getItem(`${propertyName}.length`) ?? 0);
    for (let i = 0n; i < length; i++) {
        localStorage.removeItem(`#splitString[${i}]:${propertyName}`);
    }
    localStorage.removeItem(`${propertyName}.length`);
}

async function waitForjQueryLoad() {
    if (window.jQuery) {
        try {
            $(async function onDocumentLoad() {
                $("img[src='/andexdb/pack_icon.svg']").attr("data-is-pack-icon-image", "");
                const animatedIconIsCachedStatusIndicator = $(
                    "#animated-icon-is-cached-status-indicator"
                ).get(0);
                const useAnimatedIconToggle = $("#use-animated-icon-toggle").get(0);
                cachedIcon = (await getCachedImage(animatedIconCachedLocalStorageID))?.data ?? null;
                if (animatedIconIsCachedStatusIndicator !== undefined) {
                    if (cachedIcon === null) {
                        animatedIconIsCachedStatusIndicator.style.color = "red";
                        animatedIconIsCachedStatusIndicator.textContent = "false";
                    } else {
                        animatedIconIsCachedStatusIndicator.style.color = "green";
                        animatedIconIsCachedStatusIndicator.textContent = "true";
                    }
                }

                Object.defineProperties(window, {
                    clearCachedAnimatedIcon: {
                        value: async function clearCachedAnimatedIcon() {
                            removeCachedImage(animatedIconCachedLocalStorageID);
                            cachedIcon = null;
                            if (animatedIconIsCachedStatusIndicator !== undefined) {
                                animatedIconIsCachedStatusIndicator.style.color = "red";
                                animatedIconIsCachedStatusIndicator.textContent = "false";
                            }
                        },
                        writable: false,
                        configurable: false,
                        enumerable: true,
                    },
                    animatedIconEnabled: {
                        get: function animatedIconEnabled() {
                            return (
                                localStorage.getItem(animatedIconEnabledLocalStorageID) !== "false"
                            );
                        },
                        set: async function animatedIconEnabled(value) {
                            animatedIconEnabledInternal = String(value) !== "false";
                            if (
                                useAnimatedIconToggle !== undefined &&
                                useAnimatedIconToggle.checked !== animatedIconEnabledInternal
                            ) {
                                useAnimatedIconToggle.checked = animatedIconEnabledInternal;
                            }
                            localStorage.setItem(
                                animatedIconEnabledLocalStorageID,
                                String(animatedIconEnabledInternal)
                            );
                            $("img[data-is-pack-icon-image]").prop(
                                "src",
                                animatedIconEnabledInternal ? cachedIcon : "/andexdb/pack_icon.svg"
                            );
                            if (animatedIconEnabledInternal && cachedIcon === null) {
                                try {
                                    const data =
                                        "data:image/svg+xml," +
                                        encodeURIComponent(
                                            await fetch(
                                                "/andexdb/pack_icon_animated_0.5x_frames_v2.svg"
                                            ).then((r) => r.text())
                                        );
                                    cacheImage(animatedIconCachedLocalStorageID, data, true);
                                    cachedIcon = data;
                                } catch (e) {
                                    console.error(
                                        "An error occured while loading or caching the animated icon:",
                                        e,
                                        e.stack
                                    );
                                }
                            }
                        },
                        configurable: false,
                        enumerable: true,
                    },
                });
                const animatedIconEnabledValue = localStorage.getItem(
                    animatedIconEnabledLocalStorageID
                );
                if (animatedIconEnabledValue === "false") {
                    animatedIconEnabledInternal = false;
                }
                if (animatedIconEnabledValue === null) {
                    localStorage.setItem(animatedIconEnabledLocalStorageID, "true");
                    animatedIconEnabledInternal = true;
                }

                if (
                    useAnimatedIconToggle !== undefined &&
                    useAnimatedIconToggle.checked !== animatedIconEnabledInternal
                ) {
                    useAnimatedIconToggle.checked = animatedIconEnabledInternal;
                }
                if (!animatedIconEnabledInternal) {
                    console.log(
                        "cached animated pack icon image loader loaded but returned due to the animated icon being disabled."
                    );
                    return;
                }
                if (cachedIcon === null) {
                    try {
                        const data =
                            "data:image/svg+xml," +
                            encodeURIComponent(
                                await fetch("/andexdb/pack_icon_animated_0.5x_frames_v2.svg").then(
                                    (r) => r.text()
                                )
                            );
                        cacheImage(animatedIconCachedLocalStorageID, data, true);
                        cachedIcon = data;
                    } catch (e) {
                        console.error(
                            "An error occured while loading or caching the animated icon:",
                            e,
                            e.stack
                        );
                    }
                }

                if (animatedIconIsCachedStatusIndicator !== undefined) {
                    if (cachedIcon === null) {
                        animatedIconIsCachedStatusIndicator.style.color = "red";
                        animatedIconIsCachedStatusIndicator.textContent = "false";
                    } else {
                        animatedIconIsCachedStatusIndicator.style.color = "green";
                        animatedIconIsCachedStatusIndicator.textContent = "true";
                    }
                }

                $("img[data-is-pack-icon-image]").prop(
                    "src",
                    animatedIconEnabledInternal ? cachedIcon : "/andexdb/pack_icon.svg"
                );
                console.log("cached animated pack icon image loader loaded");
            });
        } catch (e) {
            console.error(
                "An error occured in cached_animated_pack_icon_image_loader.js:",
                e,
                e.stack
            );
        }
    } else {
        setTimeout(function () {
            waitForjQueryLoad();
        }, 50);
    }
}

const dataCacheDBName = "dataCache";

/**
 * @type {IDBDatabase}
 */
let db;

async function initDataCache() {
    const request = indexedDB.open(dataCacheDBName, 2);

    /**
     * @type {IDBVersionChangeEvent}
     */
    const r = await new Promise((resolve, reject) => {
        request.onerror = (event) => reject(event);
        request.onupgradeneeded = (event) => resolve(event);
        request.onsuccess = (event) => resolve(event);
    });
    db = r.target.result;
    if (!db.objectStoreNames.contains("cachedImages")) {
        const objStore = db.createObjectStore("cachedImages", { keyPath: "fileName" });
        // Use transaction oncomplete to make sure the objectStore creation is
        // finished before adding data into it.
        await new Promise((resolve, reject) => {
            objStore.transaction.oncomplete = (event) => resolve(event);
            objStore.transaction.onerror = (event) => reject(event);
        });

        objStore.createIndex("fileName", "fileName", { unique: false });
    }
    const transaction = db.transaction(["cachedImages"], "readwrite");
    transaction.oncomplete = () => {
        console.log("Data Cache Initialized");
    };

    transaction.onerror = (e) => {
        // Don't forget to handle errors!
        console.error(e, e.stack);
    };

    // Store values in the newly created objectStore.
    // const cachedImages = transaction.objectStore("cachedImages");
    // cachedImages.add({ fileName: animatedIconCachedLocalStorageID, data: "test1234" });
}

/**
 * Retrieves all cached images from the IndexedDB.
 *
 * This function opens a transaction on the "cachedImages" object store
 * in the IndexedDB and retrieves all entries. Each entry consists of a
 * file name and associated data, which are returned as an array of objects.
 *
 * @returns {Promise<{fileName: string, data: string}[]>} A promise that resolves
 * to an array of objects, each containing a file name and its corresponding data.
 * @throws Will throw an error if the retrieval process fails.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function getCachedImages() {
    const transaction = db.transaction(["cachedImages"], "readwrite");
    const cachedImages = transaction.objectStore("cachedImages");
    /**
     * @type {{fileName: string, data: string}[]}
     */
    const r = await new Promise((resolve, reject) => {
        const request = cachedImages.getAll();
        request.onsuccess = (event) => resolve(event.target.result);
        request.onerror = (event) => reject(event);
    });
    return r;
}

/**
 * Retrieves a cached image from the IndexedDB.
 *
 * This function opens a transaction on the "cachedImages" object store
 * in the IndexedDB and retrieves the entry with the given file name.
 *
 * @param {string} fileName The file name of the image to be retrieved.
 * @returns {Promise<{fileName: string, data: string} | undefined>} A promise that resolves
 * to an object containing the file name and associated data.
 * @throws Will throw an error if the retrieval process fails.
 */
async function getCachedImage(fileName) {
    const transaction = db.transaction(["cachedImages"], "readwrite");
    const cachedImages = transaction.objectStore("cachedImages");
    /**
     * @type {{fileName: string, data: string} | undefined}
     */
    const r = await new Promise((resolve, reject) => {
        const request = cachedImages.get(fileName);
        request.onsuccess = (event) => resolve(event.target.result);
        request.onerror = (event) => reject(event);
    });
    return r;
}

/**
 * Caches an image in the IndexedDB.
 *
 * This function opens a transaction on the "cachedImages" object store
 * in the IndexedDB and adds a new entry with the file name and data
 * provided.
 *
 * @param {string} fileName
 * @param {string} data
 * @param {boolean} [overwrite=true]
 */
async function cacheImage(fileName, data, overwrite = false) {
    const transaction = db.transaction(["cachedImages"], "readwrite");
    const cachedImages = transaction.objectStore("cachedImages");
    if (overwrite) {
        cachedImages.delete(fileName);
    }
    cachedImages.add({ fileName, data });
}

/**
 * Removes a cached image from the IndexedDB.
 *
 * This function opens a transaction on the "cachedImages" object store
 * in the IndexedDB and deletes the entry with the specified file name.
 *
 * @param {string} fileName - The name of the file to be removed from the cache.
 */
function removeCachedImage(fileName) {
    const transaction = db.transaction(["cachedImages"], "readwrite");
    const cachedImages = transaction.objectStore("cachedImages");
    cachedImages.delete(fileName);
}

async function init() {
    await initDataCache();

    waitForjQueryLoad();
}

init();
