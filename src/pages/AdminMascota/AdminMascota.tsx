import { useContext, useEffect, useState } from 'react';
export interface AdminMascotaInterface { }

//Context
import MascotaContext from "../../context/MascotaContext";
import { IMascota } from '../../models/Mascota';

//Styled Components
import Container from "../../styledComponents/styled.container";
import TableContainer from "../../styledComponents/styled.table.container";

//React icons
import { AiFillEdit, AiFillDelete, AiFillPlusSquare } from "react-icons/ai";
import { Modal } from '../../components/Modal';
import { MascotaForm } from '../../components/MascotaForm';
import { Button } from '../../styledComponents/styled.buttons';

const AdminMascota: React.FC<AdminMascotaInterface> = () => {

	//States
	const [isOpenModal, setIsOpenModal] = useState(false)

	//Context
	const { state, deleteMascotaById, setSelectedMascota } = useContext(MascotaContext)


	const handleDelete = async (id: number) => {
		await deleteMascotaById(id).then(res =>{
			console.log("OK: ",res)
		}).catch(res => {
			console.log("ERROR: ",res)
		})
	}

	const handleEdit = async (id: number) => {
		await setSelectedMascota(id).then(res => {
			setIsOpenModal(true)
		}).catch(err => {
			console.log(err)
		})
	}

	useEffect(() => {
		const title: string[] = document.title.split("-"); 
		document.title = title[0] + " - Gestión"
	}, [])


	return (
		<>
			<div className='d-flex justify-content-center'>
				<Container className='my-5 d-flex flex-column gap-4'>
					<h1 className='display-6'>Gestión de mascotas</h1>
					<div className='d-flex flex-column gap-5 px-4'>
						<div className='d-flex gap-4 align-items-center justify-content-between'>
							<p className='m-0 fs-5'>Mascotas registradas: <span>{state.mascotas.length}</span></p>
							<Button
								color='#42b2fc' 
								className='d-flex justify-content-center align-items-center gap-1'
								onClick={()=>setIsOpenModal(true)}
							>
								<AiFillPlusSquare className='fs-4' />
								<p className='my-auto'>Registrar</p>
							</Button>
						</div>
						{/* Table */}
						<TableContainer className='table-responsive'>
							<table className="table m-0">
								<thead className='text-center'>
									<tr>
										<th>Nombre</th>
										<th>Especie</th>
										<th>Edad</th>
										<th>Dueño</th>
										<th>Email</th>
										<th>Actions</th>
									</tr>
								</thead>
								<tbody>
									{
										state.mascotas && state.mascotas.map(m => {
											return (
												<tr key={m.id} className="text-center">
													<td><p className='text-truncate m-0 mt-2'>{m.name}</p></td>
													<td><p className='text-truncate m-0 mt-2'>{m.especies}</p></td>
													<td><p className='text-truncate m-0 mt-2'>{m.age}</p></td>
													<td><p className='text-truncate m-0 mt-2'>{m.ownername}</p></td>
													<td><p className='text-truncate m-0 mt-2'>{m.email}</p></td>
													<td>
														<div className='d-flex justify-content-center align-items-center gap-2'>
															<button className='btn btn-warning text-light' onClick={() => handleEdit(m.id)}><AiFillEdit className='fs-5' /></button>
															<button className='btn btn-danger' onClick={() => handleDelete(m.id)}><AiFillDelete className='fs-5' /></button>
														</div>
													</td>
												</tr>
											)
										})
									}
								</tbody>
							</table>
						</TableContainer>
					</div>
				</Container>
			</div>
			<Modal isOpenned={isOpenModal}>
				<MascotaForm title={state.selectedMascota ? 'Actualizar Mascota' : 'Registrar mascota'} setIsOpenModal={setIsOpenModal} />
			</Modal>
		</>

	);
};

export default AdminMascota;
