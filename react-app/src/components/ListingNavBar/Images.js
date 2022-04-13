import { useDropzone } from 'react-dropzone';
import { useEffect } from 'react';
import {arrayMoveImmutable} from "array-move";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import Photo from './Photo';
import Gallery from "react-photo-gallery";
import './style/images.css';

const SortablePhoto = SortableElement(item => <Photo {...item} />);
const SortableGallery = SortableContainer(({ items }) => (
    <Gallery photos={items} renderImage={props => <SortablePhoto {...props} />} />
));

const Images = ({ imagesFuncs }) => {

    const {
        files, setFiles
    } = imagesFuncs;

    console.log(files);

    useEffect(() => {
        files?.forEach(file => URL.createObjectURL(file))

    }, [files]);

    const onSortEnd = ({ oldIndex, newIndex }) => {
        setFiles(arrayMoveImmutable(files, oldIndex, newIndex));
    };

    const baseStyle = {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        borderWidth: 2,
        borderRadius: 2,
        borderColor: '#eeeeee',
        borderStyle: 'dashed',
        backgroundColor: '#fafafa',
        color: '#bdbdbd',
        outline: 'none',
        transition: 'border .24s ease-in-out'
    };

    const thumbsContainer = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 16
    };

    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/png',
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        }
    });

    const photos = []
    files?.forEach(file => (
        photos.push({ src: file.preview, width: 3, height: 3})
    ));


    return (
        <section className="container">
            <div {...getRootProps({ style: baseStyle })}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop for multiple files here, or click to select one file</p>
            </div>
            <aside style={thumbsContainer}>
                <div>
                    <SortableGallery style={{width: "500px"}} items={photos} onSortEnd={onSortEnd} axis={"xy"} />
                </div>
            </aside>
        </section>
    );
};

export default Images;
