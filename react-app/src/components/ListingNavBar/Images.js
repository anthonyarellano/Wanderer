import { useDropzone } from 'react-dropzone';
import { arrayMoveImmutable } from "array-move";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import Photo from './Photo';
import Gallery from "react-photo-gallery";
import './style/images.css';

const SortablePhoto = SortableElement(item => <Photo {...item} />);
const SortableGallery = SortableContainer(({ items }) => (
    <Gallery photos={items} renderImage={props => <SortablePhoto {...props} />} />
));

const Images = ({ imagesFuncs, hasSubmitted, imageErrors }) => {

    const {
        files, setFiles
    } = imagesFuncs;

    const onSortEnd = ({ oldIndex, newIndex }) => {
        setFiles(arrayMoveImmutable(files, oldIndex, newIndex));
    };

    const baseStyle = {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '75px',
        borderWidth: 2,
        borderRadius: 2,
        borderColor: '#eeeeee',
        borderStyle: 'dashed',
        backgroundColor: '#fafafa',
        color: '#bdbdbd',
        fontFamily: 'CerealLight',
        outline: 'none',
        transition: 'border .24s ease-in-out',
        margin: "2% 10% 0% 0%"
    };

    const thumbsContainer = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 16
    };

    const { getRootProps, getInputProps } = useDropzone({
        accept: ['image/jpeg', 'image/png'],
        onDrop: acceptedFiles => {
            setFiles((files) => {
                let newFiles = acceptedFiles.map(file => Object.assign(file, {
                    preview: URL.createObjectURL(file)
                }));
                return [...files, ...newFiles]
            })
        }
    });

    const photos = []
    files?.forEach(file => (
        photos.push({ src: file.preview, width: 3, height: 3 })
    ));


    return (
        <section className="container">
            {hasSubmitted && imageErrors?.map((error) => (
                <p style={{ fontFamily: 'CerealLight', color: 'red' }}>{error}</p>
            ))}
            <div {...getRootProps({ style: baseStyle })}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop at least 5 photos here, then click and drag to re-order</p>
                <p>supported file types: jpeg/png</p>
            </div>
            <aside style={thumbsContainer}>
                <div>
                    <SortableGallery items={photos} onSortEnd={onSortEnd} axis={"xy"} />
                </div>
            </aside>
        </section>
    );
};

export default Images;
