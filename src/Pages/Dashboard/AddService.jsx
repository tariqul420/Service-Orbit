import { useMutation } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { MdError } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
import useAxiosSecure from '../../Hook/useAxiosSecure';

const AddService = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Add Service || Service Orbit';
  }, []);

  const { isPending, mutateAsync } = useMutation({
    mutationFn: async (serviceData) => {
      await axiosSecure.post('/add-service', serviceData);
    },
    onSuccess: () => {
      toast.success('Service Added Successfully!');
      navigate('/manage-service');
    },
  });

  const onSubmit = async (data) => {
    const { serviceImage, serviceName, serviceArea, servicePrice, serviceDescription } = data;

    const serviceData = {
      serviceImage,
      serviceName,
      serviceArea,
      servicePrice,
      serviceDescription,
      serviceProvider: {
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      },
    };

    try {
      await mutateAsync(serviceData);
      reset();
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <section className="max-w-4xl mx-auto my-8 px-4">
      <div className="bg-white/80 dark:bg-color-dark-lite  backdrop-blur-xl rounded-2xl shadow-lg p-6 md:p-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-6">Add New Service</h3>

          {/* Service Image */}
          <div className="space-y-2">
            <label className="block text-sm font-medium">Service Image URL</label>
            <input
              type="text"
              placeholder="Enter image URL"
              className="w-full px-4 py-3 rounded-lg border  focus:ring-2 focus:ring-color-accent focus:border-color-accent  transition-all dark:bg-color-primary-d"
              {...register('serviceImage', { required: 'Photo URL is required' })}
            />
            {errors.serviceImage && (
              <p className="flex items-center gap-1 text-red-500 text-sm">
                <MdError /> {errors.serviceImage.message}
              </p>
            )}
          </div>

          {/* Service Name */}
          <div className="space-y-2">
            <label className="block text-sm font-medium">Service Name</label>
            <input
              type="text"
              placeholder="Enter service name"
              className="w-full px-4 py-3 rounded-lg border  focus:ring-2 focus:ring-color-accent focus:border-color-accent transition-all dark:bg-color-primary-d"
              {...register('serviceName', { required: 'Service Name is required' })}
            />
            {errors.serviceName && (
              <p className="flex items-center gap-1 text-red-500 text-sm">
                <MdError /> {errors.serviceName.message}
              </p>
            )}
          </div>

          {/* Service Area */}
          <div className="space-y-2">
            <label className="block text-sm font-medium">Service Area</label>
            <input
              type="text"
              placeholder="Enter service area"
              className="w-full px-4 py-3 rounded-lg border  focus:ring-2 focus:ring-color-accent focus:border-color-accent transition-all dark:bg-color-primary-d"
              {...register('serviceArea', { required: 'Service Area is required' })}
            />
            {errors.serviceArea && (
              <p className="flex items-center gap-1 text-red-500 text-sm">
                <MdError /> {errors.serviceArea.message}
              </p>
            )}
          </div>

          {/* Service Price */}
          <div className="space-y-2">
            <label className="block text-sm font-medium">Service Price</label>
            <input
              type="number"
              placeholder="Enter price"
              className="w-full px-4 py-3 rounded-lg border  focus:ring-2 focus:ring-color-accent focus:border-color-accent transition-all dark:bg-color-primary-d"
              {...register('servicePrice', { required: 'Service Price is required' })}
            />
            {errors.servicePrice && (
              <p className="flex items-center gap-1 text-red-500 text-sm">
                <MdError /> {errors.servicePrice.message}
              </p>
            )}
          </div>

          {/* Service Description */}
          <div className="space-y-2">
            <label className="block text-sm font-medium">Service Description</label>
            <textarea
              rows={6}
              placeholder="Describe your service"
              className="w-full px-4 py-3 rounded-lg border  focus:ring-2 focus:ring-color-accent focus:border-color-accent transition-all resize-none dark:bg-color-primary-d"
              {...register('serviceDescription', { required: 'Service Description is required' })}
            />
            {errors.serviceDescription && (
              <p className="flex items-center gap-1 text-red-500 text-sm">
                <MdError /> {errors.serviceDescription.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isPending}
              className="px-6 py-3 bg-color-accent text-white rounded-lg font-semibold hover:bg-blue-600 focus:ring-2 focus:ring-color-accent focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed">
              {isPending ? 'Adding...' : 'Add Service'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddService;
