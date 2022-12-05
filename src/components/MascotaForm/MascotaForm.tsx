import React, { ChangeEvent, Dispatch, HtmlHTMLAttributes, SetStateAction, useContext, useState } from 'react';
import { Form, Field, Formik, FormikState, FormikHelpers, ErrorMessage } from "formik";
import { IPostMascota, IPutMascota } from '../../models/Mascota';
import { mascotaSchema, mascotaUpdateSchema } from '../../validations/mascotas.validation';

//Styled components
import { Button } from "../../styledComponents/styled.buttons";
import mascotaService from '../../services/mascota.service';
import mascotaContext from '../../context/MascotaContext';

export interface MascotaFormInterface {
	title: string,
	setIsOpenModal: Dispatch<SetStateAction<boolean>>
}


const MascotaForm: React.FC<MascotaFormInterface> = ({ title, setIsOpenModal }) => {

	//States
	const [image, setImage] = useState<FileList | null>(null)

	//Context
	const { postMascota, updateMascotaById, state, clearSelectedMascota } = useContext(mascotaContext)

	const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
		console.log(e.target.files)
		setImage(e.target.files)
	}

	const handleCancel = () => {
		setIsOpenModal(false)
		clearSelectedMascota()
	}

	const initialValues: IPostMascota = {
		name: state.selectedMascota?.name ?? '',
		especies: state.selectedMascota?.especies ?? '',
		age: state.selectedMascota?.age ?? '',
		ownername: state.selectedMascota?.ownername ?? '',
		email: state.selectedMascota?.email ?? '',
		image: ''
	}


	return (
		<>
			<div className='w-100 border-bottom border-2'>
				<h1 className='display-6'>{title ? title : 'Default title'}</h1>
			</div>
			<div className='w-100 p-3'>
				<Formik
					initialValues={initialValues}
					validationSchema={state.selectedMascota ? mascotaUpdateSchema : mascotaSchema}
					onSubmit={
						async (values: IPostMascota, helpers: FormikHelpers<IPostMascota>) => {

							if (!state.selectedMascota) {
								await postMascota(values as IPostMascota, image).then(res => {
									setIsOpenModal(false)
									helpers.setSubmitting(false)
								}).catch(e => {
									console.log(e)
								})
							} else {
								await updateMascotaById(state.selectedMascota.id, values, image).then(res => {
									console.log("Completado con exitante")
									setIsOpenModal(false)
									clearSelectedMascota()
									helpers.setSubmitting(false)
								}).catch(err => {
									console.log(err)
								})
							}

						}
					}
				>
					{({ isSubmitting }: FormikState<IPostMascota>) => (
						<Form className=' d-flex flex-column gap-3'>
							<div className='d-flex gap-2'>
								<div className='w-50'>
									<label className='form-label'>Nombre:</label>
									<Field type={'text'} name={'name'} className='form-control' autoComplete={"off"} />
									<ErrorMessage name='name' component={'p'} className='m-0 text-danger' />
								</div>
								<div className='w-50'>
									<label className='form-label'>Especie:</label>
									<Field type={'text'} name={'especies'} className='form-control' autoComplete={"off"} />
									<ErrorMessage name='especies' component={'p'} className='m-0 text-danger' />
								</div>
							</div>
							<div className='d-flex gap-2'>
								<div className='w-50'>
									<label className='form-label'>Edad:</label>
									<Field type={'text'} name={'age'} className='form-control' autoComplete={"off"} />
									<ErrorMessage name='age' component={'p'} className='m-0 text-danger' />
								</div>
								<div className='w-50'>
									<label className='form-label'>Nombre del dueño:</label>
									<Field type={'text'} name={'ownername'} className='form-control' autoComplete={"off"} />
									<ErrorMessage name='ownername' component={'p'} className='m-0 text-danger' />
								</div>
							</div>
							<div className='d-flex gap-2'>
								<div className='w-50'>
									<label className='form-label'>Email del dueño:</label>
									<Field type={'text'} name={'email'} className='form-control' autoComplete={"off"} />
									<ErrorMessage name='email' component={'p'} className='m-0 text-danger' />
								</div>
								<div className='w-50'>
									<label className='form-label'>Imagen</label>
									<Field type="file" className='form-control' name='image' onBlur={(e: ChangeEvent<HTMLInputElement>) => handleImage(e)} />
									<ErrorMessage name='image' component={'p'} className='m-0 text-danger' />
								</div>
							</div>
							<div className='d-flex justify-content-end gap-4 mt-3'>
								<Button type='submit' color='#477eff' disabled={isSubmitting}>
									{
										isSubmitting ?
											<>
												<span className="spinner-border spinner-border-sm"></span>
												Loading...
											</>
											: state.selectedMascota ? 'Guardar' : 'Enviar'
									}
								</Button>
								<Button color='#ff4747' onClick={handleCancel}>Cancelar</Button>
							</div>
						</Form>
					)}
				</Formik>
			</div>
		</>
	);
};

export default MascotaForm;
