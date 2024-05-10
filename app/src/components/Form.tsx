import {FieldValues, useForm} from "react-hook-form";
import {z} from "zod";

const schema = z.object({
    name: z.string().min(3),
    age: z.number().min(18),
});

type FormData = z.infer<typeof schema>;

function Form() {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();
    const onSubmit = () => console.log(errors);

    return (
        <form className="my-5" onSubmit={handleSubmit(onSubmit)}>
            <label className="form-label" htmlFor="name">
                Name
            </label>
            <div className="mb-3">
                <input
                    className={errors.name ? "form-control is-invalid" : "form-control"}
                    id="name"
                    {...register("name", {required: true, minLength: 4})}
                />
                {errors.name?.type === "required" && <p className="text-danger">Name is required</p>}
                {errors.name?.type === "minLength" && <p className="text-danger">Name must be 4 characters long.</p>}
            </div>
            <button className="btn btn-primary">Submit</button>
        </form>
    );
}

export default Form;
