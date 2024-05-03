import { Link, useForm, Head } from '@inertiajs/react';
import classNames from 'classnames';
import React from 'react';
import useRoute from '@/Hooks/useRoute';
import useTypedPage from '@/Hooks/useTypedPage';
import AuthenticationCard from '@/Components/AuthenticationCard';
import Checkbox from '@/Components/Checkbox';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import SelectInput from '@/Components/SelectInput';
import InputError from '@/Components/InputError';

export default function FormDormitoryAccess() {
  const page = useTypedPage();
  const route = useRoute();
  const form = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    terms: false,
  });

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    form.post(route('register'), {
      onFinish: () => form.reset('password', 'password_confirmation'),
    });
  }

  return (
    <AuthenticationCard className="bg-red-600">
      <Head title="Register" />

        <form onSubmit={onSubmit}>
            <div>
                <InputLabel htmlFor="name">Nama Lengkap</InputLabel>
                <TextInput
                    id="name"
                    type="text"
                    className="mt-1 block w-full"
                    value={form.data.name}
                    onChange={e => form.setData('name', e.currentTarget.value)}
                    required
                    autoFocus
                    autoComplete="name"
                    placeholder="Contoh: John Doe"
                />
                <InputError className="mt-2" message={form.errors.name} />
            </div>

            <div className="mt-4">
                <InputLabel htmlFor="name">Kamar</InputLabel>
                {/* Select Input */}
                <SelectInput
                    id="dormitory"
                    className="mt-1 block w-full"
                    value={form.data.name}
                    // onChange={e => form.setData('dormitory', e.currentTarget.value)}
                    required
                >
                    <option value="1">Dormitory 1</option>
                    <option value="2">Dormitory 2</option>
                    <option value="3">Dormitory 3</option>
                </SelectInput>
                <InputError className="mt-2" message={form.errors.name} />
            </div>

            <div className="mt-4">
                <InputLabel htmlFor="name">Kelas</InputLabel>
                {/* Select Input */}
                <SelectInput
                    id="dormitory"
                    className="mt-1 block w-full"
                    value={form.data.name}
                    // onChange={e => form.setData('dormitory', e.currentTarget.value)}
                    required
                >
                    <option value="1">2A Pagi</option>
                    <option value="2">2B Pagi</option>
                    <option value="3">2A Siang</option>
                </SelectInput>
                <InputError className="mt-2" message={form.errors.name} />
            </div>

            <div className="mt-4">
                <InputLabel htmlFor="name">Keterangan</InputLabel>
                {/* Select Input */}
                <SelectInput
                    id="dormitory"
                    className="mt-1 block w-full"
                    value={form.data.name}
                    // onChange={e => form.setData('dormitory', e.currentTarget.value)}
                    required
                >
                    <option value="1">Keluar/Pergi</option>
                    <option value="2">Masuk/Pulang</option>
                </SelectInput>
                <InputError className="mt-2" message={form.errors.name} />
            </div>

            <div className="mt-4">
                <InputLabel htmlFor="email">Waktu Keluar/Masuk</InputLabel>
                <TextInput
                    id="email"
                    type="datetime-local"
                    className="mt-1 block w-full"
                    value={form.data.email}
                    onChange={e => form.setData('email', e.currentTarget.value)}
                    required
                />
                <InputError className="mt-2" message={form.errors.email} />
            </div>

            <div className="mt-4">
                <InputLabel htmlFor="name">Pergi dengan / Diantar siapa?</InputLabel>
                {/* Select Input */}
                <SelectInput
                    id="dormitory"
                    className="mt-1 block w-full"
                    value={form.data.name}
                    // onChange={e => form.setData('dormitory', e.currentTarget.value)}
                    required
                >
                    <option value="1">Teman</option>
                    <option value="2">Saudara</option>
                    <option value="2">Orangtua</option>
                    <option value="2">Kendaraan Umum (Taksi, Angkot, Gojek dan sejenisnya)</option>
                </SelectInput>
                <InputError className="mt-2" message={form.errors.name} />
            </div>

            <div className="mt-4">
                <InputLabel htmlFor="password">Nomor kerabat yang dapat dihubungi</InputLabel>
                <TextInput
                    id="emergency_contact"
                    type="text"
                    className="mt-1 block w-full"
                    value={form.data.password}
                    onChange={e => form.setData('password', e.currentTarget.value)}
                    required
                    autoComplete="new-password"
                    placeholder="Contoh: 081234567890"
                />
                <InputError className="mt-2" message={form.errors.password} />
            </div>

            <div className="mt-4">
                <InputLabel htmlFor="password_confirmation">
                    Tujuan/Alasan
                </InputLabel>
                <TextInput
                    id="tujuan"
                    type="text"
                    className="mt-1 block w-full"
                    value={form.data.password_confirmation}
                    onChange={e =>
                        form.setData('password_confirmation', e.currentTarget.value)
                    }
                    required
                    autoComplete="new-password"
                    placeholder="Contoh: Pergi ke rumah saudara / Kembali ke asrama dari rumah saudara"
                />
                <InputError
                    className="mt-2"
                    message={form.errors.password_confirmation}
                />
            </div>

            {page.props.jetstream.hasTermsAndPrivacyPolicyFeature && (
                <div className="mt-4">
                    <InputLabel htmlFor="terms">
                        <div className="flex items-center">
                            <Checkbox
                                name="terms"
                                id="terms"
                                checked={form.data.terms}
                                onChange={e => form.setData('terms', e.currentTarget.checked)}
                                required
                            />

                            <div className="ml-2">
                                Saya setuju dengan {` `}
                                <a
                                    target="_blank"
                                    href={route('dorm.terms.show')}
                                    className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                                >
                                    Syarat dan Ketentuan Asrama
                                </a>
                            </div>
                        </div>
                        <InputError className="mt-2" message={form.errors.terms} />
                    </InputLabel>
                </div>
            )}

            <div className="flex items-center justify-end mt-4">

                <PrimaryButton
                    className={classNames('ml-4', { 'opacity-25': form.processing })}
                    disabled={form.processing}
                >
                    Kirim Permintaan Izin
                </PrimaryButton>
            </div>
        </form>
    </AuthenticationCard>
  );
}
