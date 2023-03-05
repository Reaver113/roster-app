import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import EditRoster from '../ components/EditRoster';

describe('EditRoster', () => {
  const users = [
    { _id: '1', name: 'John Doe', employee: 'JD' },
    { _id: '2', name: 'Jane Smith', employee: 'JS' },
    { _id: '3', name: 'Bob Johnson', employee: 'BJ' },
  ];
  const viewingRoster = {
    start: '09:00',
    end: '17:00',
    shifts: [
      { employee: 'JD', start: '09:00', end: '17:00' },
      { employee: 'JS', start: '09:00', end: '17:00' },
      { employee: 'BJ', start: '09:00', end: '17:00' },
    ],
  };
  const putRoster = jest.fn().mockResolvedValue({});

  it('renders the roster with employee names and hours', () => {
    render(<EditRoster users={users} viewingRoster={viewingRoster} putRoster={putRoster} />);
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    expect(screen.getByText('Bob Johnson')).toBeInTheDocument();
    expect(screen.getByText('09:00')).toBeInTheDocument();
    expect(screen.getByText('16:00')).toBeInTheDocument();
    expect(screen.getByText('17:00')).toBeInTheDocument();
  });

  it('updates the working hours when an hour block is clicked', () => {
    render(<EditRoster users={users} viewingRoster={viewingRoster} putRoster={putRoster} />);
    const hourBlock = screen.getByText('09:00');
    fireEvent.click(hourBlock);
    expect(hourBlock).toHaveClass('JD');
    const publishButton = screen.getByRole('button', { name: 'Publish Roster' });
    fireEvent.click(publishButton);
    expect(putRoster).toHaveBeenCalledWith('id', {
      start: '09:00',
      end: '17:00',
      shifts: [
        { employee: 'JD', start: '09:00', end: '10:00' },
        { employee: 'JS', start: '09:00', end: '17:00' },
        { employee: 'BJ', start: '09:00', end: '17:00' },
      ],
    });
  });

  it('navigates back to previous page after successful roster update', async () => {
    render(<EditRoster users={users} viewingRoster={viewingRoster} putRoster={putRoster} />);
    const publishButton = screen.getByRole('button', { name: 'Publish Roster' });
    fireEvent.click(publishButton);
    await waitFor(() => expect(putRoster).toHaveBeenCalled());
    expect(screen.queryByText('John Doe')).not.toBeInTheDocument();
  });
});